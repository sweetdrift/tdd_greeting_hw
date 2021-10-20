function greet(name1,name2,name3) {
  name1='';
  name2='';
  name3='';
  if(name1 != '')
    console.log("Hello, " + name1 + ", " + name2 + ", " + name3 + ", " + "!");
    else if(name1=='')
    console.log("Hello, my friend!");

  }

  module.exports = greet
  