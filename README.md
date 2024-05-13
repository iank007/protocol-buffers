# protocol-buffers

Scalar Values

Scalar value types are converted as follows:

Protobuf Type	Rust Type
double	        f64
float	        f32
int32	        i32
int64	        i64
uint32	        u32
uint64	        u64
sint32	        i32
sint64	        i64
fixed32	        u32
fixed64	        u64
sfixed32	    i32
sfixed64	    i64
bool	        bool
string	        String
bytes	        Vec<u8>

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

## RUST
- Cargo