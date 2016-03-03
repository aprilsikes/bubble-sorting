function bubbleSort(array) {
  var swapped;
  array.forEach(function (num, i) {
    if(num > array[i+1]){
      array[i] = array[i+1]
      array[i+1] = num;
      swapped = true;
    }
  })
  if(swapped){ bubbleSort(array) }
    return array;
}

module.exports = bubbleSort;
