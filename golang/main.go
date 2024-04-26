package main

import (
	"fmt"
	"log"

	pb "example.com/pb"
	"google.golang.org/protobuf/proto"
)

func main() {
	person := &pb.Person{Id: 23, Name: "januar", Email: "gojaru@example.com"}
	fmt.Println(person)

	data, err := proto.Marshal(person)
	if err != nil {
		log.Fatal("marshall error ", err)
	}
	fmt.Println(data)

	newPerson := &pb.Person{}
	if err = proto.Unmarshal(data, newPerson); err != nil {
		log.Fatal("unmarshall error ", err)
	}
	fmt.Println(newPerson)
	fmt.Println("endd")
}
