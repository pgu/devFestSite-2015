package devfest

import (
    "fmt"
    "strconv"
    "net/http"
    "log"
    "encoding/json"
    "io/ioutil"
    "os"
    "appengine"
    "appengine/datastore"
    "appengine/memcache"
)

type User struct {
    Favs []string `json:"favs"`
    Login string `json:"login"`
}

func init() {
    http.HandleFunc("/api/v1/getfavs", getfavs)
    http.HandleFunc("/api/v1/putfavs", putfavs)

}

func getfavs(w http.ResponseWriter, r *http.Request) {
    //w.Header().Set("SUPER-HACK", "@GDGNANTES")
    //w.WriteHeader(http.StatusFound) 
    c := appengine.NewContext(r)
    
    login := r.FormValue("login")
    favs := r.FormValue("favs")
    // Mise en cache direct du spreadsheet
    keyMemCache := "favs"+login;
    item, err := memcache.Get(c, keyMemCache);       
    var strJson []byte 
    if  err == memcache.ErrCacheMiss || err != nil{

        // Si c'est pas en cache, on regarde si c'est en base
        var user User
        keyUser := datastore.NewKey(c, "User", keyMemCache, 0, nil)
        if err := datastore.Get(c, keyUser, &user); err != nil{
            // Si c'est pas présent en base, alors on renvoie un tableau vide
            user = User{
                Login : login,
                Favs : []string
            }
        }

        tmpStrJson, _ := json.Marshal(user);
        strJson = tmpStrJson
        itemValue := &memcache.Item{
            Key: keyMemCache, 
            Value: strJson,
        }
        // On ajoute dans le memcache
        if err := memcache.Add(c, itemValue); err == memcache.ErrNotStored {
            c.Infof("itemValue with key %q already exists", itemValue.Key)
        } else if err != nil {
            c.Errorf("error adding itemValue: %v", err)
        }
       
    } else{
        strJson = item.Value
    }   
    fmt.Fprintf(w, "%s\n", strJson)
    
}


func putfavs(w http.ResponseWriter, r *http.Request) {
    login := r.FormValue("login")
    favs := r.FormValue("favs")
    if len(login) == 0 || len(favs) == 0{
        fmt.Fprint(w, "Parametre manquant\n")    
        // TODO jetter une erreur
        return
    }
    fmt.Fprint(w, login+"\n")
    fmt.Fprint(w, favs+"\n")
    
    c := appengine.NewContext(r)    
    
    // Get the item from the dataStore
    keyMemCache := "favs"+login;
    var user User
    keyUser := datastore.NewKey(c, "User", keyMemCache, 0, nil)
    if err := datastore.Get(c, keyUser, &user); err != nil{
        // Si c'est pas présent en base, alors on le créé
        user = User{
            Login : login,
            Favs : []string
        }
    }
    json.Unmarshal([]byte(favs), &user.Favs)

    _, err := datastore.Put(c, keyUser, &user)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    // On met à jour aussi le memcache
    strJson, _ := json.Marshal(user);
    itemValue := &memcache.Item{
        Key: keyMemCache, 
        Value: strJson,
    }
    if err := memcache.Set(c, item); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
}