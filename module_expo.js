/* file: module_expo.js */
/* using fs-extra module */
var fse = require('fs-extra');

/* create directory with dirname */
var create_dir = function(dir_name) {
   try{
      fse.pathExists(dir_name, (err, exists) => {
         if(exists) {
            console.log("File already exits");
         }else {
            fse.ensureDirSync(dir_name);
            console.log(dir_name + " was created");
         }
      });
   }catch(err) {
      console.log("Error: " + err.message);
   }
}

/* remove directory with dirname */
var remove_file = function(dir_name) {
   try{
      fse.pathExists(dir_name, (err, exists) => {
         if(exists) {
            fse.removeSync(dir_name);
            console.log(dir_name + " was removed with all of it's contents");
         }else {
            console.log("File does not exits");
         }
      });
   }catch(err) {
      console.log("Error: " + err.message);
   }
}

/* export module modularize */
module.exports = {
   create_dir,
   remove_file
}