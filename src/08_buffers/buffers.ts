// buffers - raw binary data
// binary data means - when u have ur data stored in bytes

// reading files
// receiving http req bodies
// working with streams
// handling images, pdf files, videos
// encrypt and hashing

// string - human readble text
// buffer - raw byts

// to generate buffer from a text
const textBuffer = Buffer.from("Node");

console.log(textBuffer);

// N - 4e - 1 char = 1 byte
// o - 6f
// d - 64

console.log(textBuffer.toString("utf-8")); // convert buffer to string...

const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length); // to check the length of the buffer

// .alloc

const fixedBuffer = Buffer.alloc(5);

console.log("empty fixed buffer", fixedBuffer); //fixed allocations and all...
// if i write more than 5 chars, then rest of the  6th charecter whatever char is there will be ignored...
fixedBuffer.write("API");

console.log("fixed buffer after write", fixedBuffer);
console.log("fixed buffer as text", fixedBuffer.toString("utf-8"));

// chunks

// array of buffers
const chunks = [Buffer.from("Hello "), Buffer.from("Node "), Buffer.from("JS")];

// concat buffer 
const combineBuffer = Buffer.concat(chunks);

console.log(combineBuffer, combineBuffer.toString("utf-8"));
