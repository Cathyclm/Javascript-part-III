function isNumber(num) {
  return +num === num
}

function mySort(list) {
  const flatList = list.flat(Infinity)
  
  const filterList = flatList.filter(element => isNumber(element))

  const setList = [...new Set(filterList)]

  console.log(setList);
  return setList.sort((a, b) => a - b)
}

export { isNumber, mySort }