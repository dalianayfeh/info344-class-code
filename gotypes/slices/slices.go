package main 

import (
    "fmt"
    "time"
)

//array in go is memory block where every element is the same size (fixed length)
//if you need to grow an array you need to reallocate and copy all elements into new array

func main() {
    var months [12]string
    
    for idx := 0; idx < 12; idx++ {
        // fmt.Println(time.Month(idx+1).String())
        months[idx] = time.Month(idx+1).String()
    }
    //fmt.Println(months[1:2]) gets a "slice" of the array...generates subset
    //fmt.Println(months[:5]) gets everything before the 5th index (exclusive)
    //fmt.Println(months[5:]) gets everything after 5
    fmt.Println(months)
    
    //building an array up
    //use make([]string) to create an initial capacity
    var dynoMonths []string
    for idx := 0; idx < 12; idx++ {
        //append(slice, new value)
        dynoMonths = append(dynoMonths, time.Month(idx+1).String())
    }
    fmt.Println(dynoMonths)
    
}