const protobuf = require('protobufjs')

protobuf.load('../person.proto', (err, root) => {
    if(err)
        throw err;

    const Person = root.lookupType("example.Person")
    const payload = {
        name: "januar",
        id: 23,
        email: "gojaru@example.com"
    }

    var errMsg = Person.verify(payload)
    if(errMsg)
        throw Error(errMsg)

    const message = Person.create(payload)
    console.log(message)

    const buffer  = Person.encode(message).finish()
    console.log(buffer)

    const message2 = Person.decode(buffer)
    console.log(message2)

    const object = Person.toObject(message, {
        numbers: String,
        // etc
    });
    console.log(object)

    console.log("endd")
})