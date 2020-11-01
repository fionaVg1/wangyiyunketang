const findAll = arr => {
    if (arr.length === 1) {
      return arr[0]
    }
    const temp = arr.shift();
    return getResult(temp, findAll(arr))
  };
  const getResult = (arrA, arrB) => {
    if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
      return
    }
    if (arrA.length === 0) {
      return arrB
    }
    if (arrA.length === 0) {
      return arrA
    }
    let result = [];
    for (let i = 0; i < arrA.length; i++) {
      for (let j = 0; j < arrB.length; j++) {
        result.push(String(arrA[i]) + String(arrB[j]))
      }
    }
    return result
  };
  var arr = [['A', 'B'],['a', 'b'],[1,2]];
  let result = findAll(arr);
  console.log(result);