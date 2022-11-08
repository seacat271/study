const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];
function uniqe (array) {
return new Set(array)
}

let uniqeFirst = uniqe(first);
let uniqeSecond = uniqe(second);
// let mix = 

let uniqeNum = [...new Set(first), ...new Set(second)].filter((item, index, array)=> array.indexOf(item) === array.lastIndexOf(item)).sort((a, b)=>a-b);
console.log([...new Set(first), ...new Set(second)])
console.log(uniqeNum)