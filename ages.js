const ages = [19,22,19,24,20,25,26,24,25,24]
//1
sorted = ages.sort((a,b)=>a-b)
console.log(`Minimum age is ${ages[0]}`);
console.log(`Minimum age is ${Math.min(...ages)}`);
console.log(`Maximum age is ${ages[ages.length-1]}`);
console.log(`Maximum age is ${Math.max(...ages)}`);

//2
function median(){
    middle = Math.floor(sorted.length/2)
if(sorted.length%2==0){
    mid1 = sorted[middle-1]
    mid2 = sorted[middle]
   return ((mid1+mid2)/2)
}
else {
    return (sorted[middle]/2)
}
}
console.log(`Median of ages ${median()}`);

//3
function avg(){
var sum=0, n=0; 
var avg=0 ;   
    for(n of sorted){
        sum =sum+n;
    }
    avg =  sum/sorted.length;
    return avg;
}
console.log(`Average age is ${avg()}`);

//4
console.log(`The range of ages is ${Math.max(...ages)-Math.min(...ages)}`);

//5
const max = Math.max(...ages)
const min = Math.min(...ages)
var avg = avg()
const minabs = Math.abs(min-avg)
const maxabs = Math.abs(max-avg)
console.log(`Difference between min-average = ${minabs}`);
console.log(`Difference between max-average = ${maxabs}`);