# protocol-buffers

## nodeJS

> npm install protobufjs
> const protobuf = require('protobufjs')

## GO-lang

> go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

For golang ritual, need to add `option go_package` in .proto file
> option go_package = ""
> protoc *.proto --go_out=.
How to import `your golang-app package /slash generated proto package`
> import pb "example.com/pb"
> import "google.golang.org/protobuf/proto"