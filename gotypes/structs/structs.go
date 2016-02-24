package main 

import (
    "github.com/dalianayfeh/info344-class-code/gotypes/structs/person"
)

func main() {
    prs := person.NewPerson("Dalia", "Nayfeh")
    // person := Person{FirstName: "Dalia", LastName: "Nayfeh"}
    //resets fields
    prs.FirstName = "D$"
    //prints out field names and values
    prs.SayHello()
    // person.SayHello(prs) --> USE WITH UNCOMMENTED SayHello()
    // fmt.Printf("%+v\n", person)
}