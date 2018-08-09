function forLoop(array){
  if(array.length == 1){
    return "I am 1 strange loop";
  } else{
    var newArray = array;
    for (var i = 1; i < array.length; i++){
      newArray.push(`I am ${i} strange loops.`);
    }
    return newArray;
  }
}