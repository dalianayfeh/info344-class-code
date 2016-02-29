package main

import (
    "net/http"
    "fmt"
    "time"
    "encoding/json"
    "log"
    "runtime"
)

//HelloResponse represents a response from the hello route
type HelloResponse struct {
    Name string `json:"name"`
    Message string `json:"message"`
    GeneratedAt time.Time `json:"generatedAt"`
}

var memstats = new(runtime.MemStats)

//better practice to implement structure like in HelloResponse
func getMemStats(w http.ResponseWriter, r *http.Request) {
    runtime.ReadMemStats(memstats)
    allocstats := make(map[string]uint64)
    allocstats["alloc"] = memstats.Alloc
    allocstats["totalAlloc"] = memstats.TotalAlloc
    j, err := json.Marshal(allocstats)
    if nil != err {
        log.Println(err)
        w.WriteHeader(500)
        w.Write([]byte(err.Error()))    
    } else {
        w.Header().Add("Content-Type", "application/json")
        w.Write(j)    
    }
}

func sayHello(w http.ResponseWriter, r *http.Request) {
    //get whatever follows /api/v1/hello/
    //on the requested url
    name := r.URL.Path[len("/api/v1/hello/"):]
    //create and initialize the response struct
    resp := HelloResponse{Name: name, 
        Message: "Hello " + name, 
        GeneratedAt: time.Now()}
    
    //convert struct to JSON
    j, err := json.Marshal(resp)
    if nil != err {
        log.Println(err)
        w.WriteHeader(500)
        w.Write([]byte(err.Error()))    
    } else {
        w.Header().Add("Content-Type", "application/json")
        w.Write(j)
    }
 }

func main() {
    http.Handle("/", http.FileServer(http.Dir("./static")))
    http.HandleFunc("/api/v1/hello/", sayHello)
    http.HandleFunc("/api/v1/memstats", getMemStats)
    
    fmt.Println("Server is listening on port 9000...")
    http.ListenAndServe(":9000", nil)
}