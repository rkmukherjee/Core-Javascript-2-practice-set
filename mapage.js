const map1 = new Map()
map1.set("Rohan",{
    age : 24,
    email : "rk@gmail.com",
    location : "Kolkata,79"
})
map1.set("Nathan",{
    age : 26,
    email : "nk@gmail.com",
    location : "Dehli,74"
})
map1.set("Ronny",{
    age : 25,
    email : "rm@gmail.com",
    location : "Mumbai,89"
})
const fn = (name) => console.log(map1.get(name));
fn("Ronny")