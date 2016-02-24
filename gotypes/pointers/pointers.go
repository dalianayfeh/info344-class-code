package main

import (
    "fmt"
)

//the * allows you to pass a pointer rather than a value
//passing a value will return 5, not 10
func doubleIt(val *int) {
    *val *= 2
}

func main() {
    val := 5
    doubleIt(&val) //& allows you to pass the pointer in
    fmt.Println(val)
}