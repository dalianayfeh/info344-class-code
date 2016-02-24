package person

import (
    "fmt"
)

//Person structure 
type Person struct {
    FirstName string
    LastName string
}

//NewPerson function that creates and returns pointer to Person Object
func NewPerson(first string, last string) *Person {
    return &Person{FirstName:first, LastName:last}
}

//SayHello needs to be SayHello(), not sayHello(). Won't get exported
// func SayHello(person *Person) {
//     fmt.Println("Hello,", person.FirstName, person.LastName)
// }

//SayHello binds function to a type
//Acts as if it's a method of a Person
func (person *Person) SayHello() {
    fmt.Println("Hello,", person.FirstName, person.LastName)
}
