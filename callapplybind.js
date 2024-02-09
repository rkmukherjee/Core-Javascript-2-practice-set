const displayInfo = (name,role) => console.log("Hi "+name+" your role is "+role);
//1
displayInfo.call(null,"Rohan","SDE")
//2
displayInfo.apply(null,["Piyush","CEO"])
//3
function greet(){
     console.log(`Hello ${this.name} thanks for being here`);
}
const user = {name :"Rohan"}
const boundGreet = greet.bind(user)
boundGreet()