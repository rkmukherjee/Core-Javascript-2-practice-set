const person1 = {
    name : "Person1",
    age : 99,
    introduce : function fun(){
        console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old`)
}
}
const person2 = {
    name : "Person2",
    age : 98
}
person1.introduce.call(person2)

