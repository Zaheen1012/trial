// file: file_functions.js

/* imports */
var file_functs = require('./module_expo');
var readline = require('readline');

/* rl interface for taking user inputs */
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
* mkdir will be path of new directory to be created
* rmdir will be path of  directory to be deleted
*/
rl.question('Enter directory name to create\n', function(mkdir) {
   rl.question('Enter directory name to delete\n', function(rmdir) {

      if(!mkdir == '') {
         try{
            file_functs.create_dir(mkdir);                                           
         }catch(err) {
            console.log("Error: " + err.message);
         }
      }else {
         console.log("Please enter a directory name");
      }

      if(!rmdir == '') {
         try{
            file_functs.remove_file(rmdir);
         }catch(err) {
            console.log("Error: " + err.message);
         }
      }else {
         console.log("Please enter a directory name");
      }

      rl.close();
   });
});

