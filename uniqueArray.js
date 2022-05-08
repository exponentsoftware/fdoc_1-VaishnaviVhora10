function checkUniqueness(array){
let checked_array=[]
for(let i=0; i< array.length; i++){
    let value = array[i]
    if (checked_array.indexOf(value) !== 1){
        return true
 }
 checked_array.push(value)
}
return false
}

array = [1,4,6,7];
console.log(checkUniqueness(array));