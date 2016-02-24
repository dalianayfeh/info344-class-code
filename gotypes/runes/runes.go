package main 

import (
    "fmt"
)

func main() {
    s := "Hello, 世界"
    
    //iterate over characters of a string...use range loop
    //idx gets index of string, r gets rune
    //wrap r in string() so you can get actual characters string(r)
    for idx, r := range s {
        fmt.Println(idx, string(r))
        fmt.Println(idx, r)    
    }
}