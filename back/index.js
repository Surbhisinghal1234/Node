// const { createServer } = require('node:http');
import http from "http";
// import { data } from "./data";

const data = [
    {  id: 1, name: 'ankita', age: 20 },
    {  id: 2, name: 'surbhi', age: 20 },
    {  id: 3, name: 'nihit', age: 20 },
    {  id: 4, name: 'garvit', age: 20 }
 ];

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const idFromUrl = req.url.split("/")[1];
    if(idFromUrl){
    const singleData = data.filter((obj) => obj.id === Number(idFromUrl));
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(singleData));
    }
    else{
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    }
  }
  else if(req.method === "POST"){
    //event-driven
    let body = "";
    req.on("data", (data) => {
        //console.log(data.toString());
        body += data.toString();
    });
    req.on("end", () => {
        // console.log(body);
        data.push(JSON.parse(body));
        console.log(data);
    })
  }
  else if(req.method === "PUT"){
    const idFromUrl = Number(req.url.split("/")[1]);
    let body = "";
    req.on("data", (data) => {
        body += data.toString();
    })
    req.on("end", () => {
        const updatedData = data.map((obj) => {
            if(obj.id === idFromUrl){
                obj = JSON.parse(body);
                return obj;
            }
            else return obj
        });
        res.statusCode = 203;
        res.setHeader("Constent-type", "application/json");
        res.end(JSON.stringify(data));
    })
  }

  //   res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log("Server Started");
});
;