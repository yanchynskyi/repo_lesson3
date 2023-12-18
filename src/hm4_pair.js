// getPaired function

function getPaired(array) {
  let resultArr = new Array();

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (element % 2 == 0) {
      resultArr.push(element);
    }
  }

  return resultArr;
}

console.log(getPaired(new Array(1, 2, 3, 4, 5, 6)));
