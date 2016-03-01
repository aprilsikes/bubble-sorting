function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > (array[i+1])) {
      console.log(array[i]);
      console.log(array[i+1]);
      var a = array[i];
      array[i] = array[i+1];
      array[i+1] = a;
      // var a = array[i+1];
      // var b = array[i];
      // a = array[0];
      // b = array[1];
      // array[i] === (array[i+1]);
      // console.log(a);
      // console.log(b);
      console.log(array);
    }
  }
  return array;
}

bubbleSort([5, 2, 7, 1, 9]);

module.exports = bubbleSort;
