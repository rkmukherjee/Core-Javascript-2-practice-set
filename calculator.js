const calculator = {
    add : (a,b) => a+b,
    subtract : (a,b) => a-b ,
    multiply : (a,b) => a*b,
    calculate : function (fun,a,b){
        if(fun==='add'){
            return this.add(a,b)
        }
        else if(fun === 'subtract'){
            return this.subtract(a,b)
        }
        else if(fun === 'multiply'){
            return this.multiply(a,b)
        }
}
}

const ans =calculator.calculate.call(calculator,'multiply',4,5)
console.log(ans);