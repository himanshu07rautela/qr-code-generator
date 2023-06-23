/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
// inside curly braces its always a object
*/


//variable inquirer  has now every functionality of inquirer;
import inquirer from "inquirer";

import qr from "qr-image";
//qr object now has all functionalities of qr-image module 
import fs from "fs";
inquirer
  .prompt([{
   
    "message":"Enter the url link :",
    "name":"url"


  }])
  .then((answers) => {
   
    const i =answers.url;
    var qr_svg = qr.image(i);
    //i is the text that we inside our qr code;
    qr_svg.pipe(fs.createWriteStream('qr_photu.png'));
    //createWriteStream() is one of the fs functionalities and we are using ut here
    //png is our default;
    /*require('fs').createWriteStream('i_love_qr.png') creates a writable stream using the createWriteStream()
     method from the built-in Node.js module fs (file system). It specifies the file path and name as 'i_love_qr.png'.
     This means the QR code image will be saved to a file named i_love_qr.png in the current working directory. */
    fs.writeFile("himanshu.txt",i,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
      
    }
  });

