var fs=require("fs");
// fs.readFile('sample.txt',function(err, data){
//     if(err) return console.log(err);
//     else
//     console.log("Async data : "+ data.toString());
// });
const  express=require("express");
const  app=express();
const port=3000;

app.get('/createTimestamp', function(req, res){
    const timestamp= new Date().getTime()
fs.appendFile(`${timestamp}.txt`, `Current time stamp :${timestamp}`, function (err) {
    if (err) throw err;
    else
    console.log("created");
   res.send(`current stamp: ${timestamp} file  created under nodefilesystem folder `)
  });
})

  app.listen(port,console.log(`listening on ${port}`))
