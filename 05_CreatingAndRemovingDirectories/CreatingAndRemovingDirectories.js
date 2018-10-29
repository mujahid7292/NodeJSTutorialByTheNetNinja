//node CreatingAndRemovingDirectories
var fs = require('fs');
var strSomeText = "Hello World";
//************Create Directory************
//***************SYNCHCRONOUSLY***********
fs.mkdirSync('./Directory');
//***************ASYNCHCRONOUSLY***********
fs.mkdir('./Directory',function(){
  //Write file asynchronously in the Directory
  fs.writeFile('./Directory/writeMe.txt',strSomeText,function(err){
    if (err) {
      conole.log("Error: " + err);
    }
  })
});

//************DELETE Directory************
//***************SYNCHCRONOUSLY***********
// fs.rmdirSync('./Directory');
//***************ASYNCHCRONOUSLY***********
//To delete directory. we have to make the Directory
//empty
fs.unlink('./Directory/writeMe.txt',function(err){
  if (err) {
    console.log("Error: " + err);
  }
  fs.rmdir('./Directory',function(err){
    if (err) {
      console.log("Error: " + err);
    }
  })
});
