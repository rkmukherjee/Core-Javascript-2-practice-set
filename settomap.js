const st = new Set()
st.add(1)
st.add(4)
st.add(7)
st.add(3)
st.add(9)
st.add(0)
const arr = Array.from(st)

const mp = new Map()
for(i in arr){
mp.set(arr[i],arr[i]*arr[i])
}

const ar = Array.from(mp)
for(i=0;i<arr.length;i++){
console.log(`Number is ${ar[i][0]}, Square is ${ar[i][1]}`);
}