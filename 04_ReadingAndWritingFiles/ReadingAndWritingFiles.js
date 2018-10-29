//############################YOU TUBE LINK################################
//https://www.youtube.com/watch?v=U57kU311-nE&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=9


//node ReadingAndWritingFiles
var fs = require('fs');
//fs is NodeJs's core module. So we have only passed the name of the module

//First we will read and write data synchronously

//***********************READ FILE SYNCHRONOUSLY****************
//First parameter is file path
//Second parameter is character encoding
// var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);

//*********************WRITE FILE SYNCHRONOUSLY*****************
//First parameter is file path
//Second parameter is data. Which will be written in the file
// fs.writeFileSync('writeMe.txt',readMe);

//***********************READ FILE ASYNCHRONOUSLY****************
//First parameter is file path
//Second parameter is character encoding
//Third parameter is call back function. This function will be invoked
//when file reading is completed
fs.readFile('readMe.txt','utf8',function(err,data){
  if (err) {
    console.log(err)
  };
  console.log(data);
  //***************WRITE FILE ASYNCHRONOUSLY**********************
  //First parameter is file path
  //Second parameter is data. Which will be written in the file
  //Third parameter is call back function. This function will be invoked
  //when file writting is completed
  fs.writeFile('writeMe.txt',data,function(err){
    if (err) {
      console.log(err)
    };
  });
})

//To delete FILE
fs.unlink('writeMe.txt',function(err){
  if (err) {
    console.log("Error: " + err);
  }
});
