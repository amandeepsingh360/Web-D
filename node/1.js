const http= require("http")
const fs=require("fs")
const fileContent=fs.readFileSync("css_pseudo_selectors.html")

// req -> request 
// req -> response
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content_type":"text/html"});
    res.end(fileContent);
})

server.listen(80,'',()=>{
    console.log("listening on port 80")
})