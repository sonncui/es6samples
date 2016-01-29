//sample for array of
var a = [1,2,3,4]
for (var value of a){
  console.log(value);
}

//sample for deal string with unicode
for (var value of "fj"){
  console.log(value);
}

// sample for new collections, Set: the elements is going to be uniq
var words = ["ad", "ad", "cd"]
var uniqWords = new Set(words);
for (var word of uniqWords){
  console.log(word)
}

// Map: Map is a key, value pair array
var map = new Map();
map.set("a",1);
map.set("b",2);
for (var [key,value] of map){
  console.log(key + ","+ value);
}

// the main function of 'for in' is to iterate object
var object={a:1, b:2}
for (var value in object){
  console.log("in"+object[value])
}

//sample for dom
document.getElementsByTagName("p")[0].innerHTML = "haha";
document.getElementById("t1").innerHTML = "hehe";
document.getElementsByClassName("tt")[0].innerHTML = "tt";
document.getElementsByName("title")[0].innerHTML = "title";
