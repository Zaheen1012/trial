var fs = require('fs');

/* synchronous directory operations */
fs.mkdirSync('new directory');
console.log("directory was created");

/* no need of cleartimeout */
var settime = setTimeout(function() {
   fs.rmdirSync('new directory');
   console.log("directory was removed after 2 seconds");
   clearTimeout(settime);
},2000);

/* check if directory exits else make one */
if (!fs.existsSync('./try')) {
   fs.mkdir('try');
   fs.mkdir('./try/inside folder');
   fs.writeFileSync('./try/one.txt', 'something in one');
}else {
   console.log('directory exits:- ' + fs.readFileSync('./try/one.txt','utf8'));
}

/* deleting a folder with all files in it */
var path = './uyt';
if (fs.existsSync('./try')) {
   folder_del(path);
}else {
   console.log('This Driectory was removed');
}

/* function: folder_del 
   param: folder path 
   purpose: checks and deletes files in folder */
function folder_del(path) {
   //fs.readdirSync(path).forEach(function(file,index) {}); can also used for looping
   for (var i = 0; i < fs.readdirSync(path).length; i++) {
      var cur_file = path + '/' + fs.readdirSync(path)[i];
      if (fs.lstatSync(cur_file).isDirectory()) {
         folder_del(cur_file);
      }else {
         fs.unlinkSync(cur_file);
      }
   }
   fs.rmdirSync(path);
}

