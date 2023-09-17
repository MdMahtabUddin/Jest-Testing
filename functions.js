const { default: axios } = require("axios");

const functions = {


    add: (num1, num2) => num1 + num2,
    
    isNull: () => null,
    checkValue:(x)=>x,
    createUser : ()=>{
        const user ={firstName:'Md Mahtab'}
        user['lastName'] ='Uddin';

        return user;
},

userfetch: ()=> axios.get('https://jsonplaceholder.typicode.com/users/1')
.then(res =>res.data)
.catch(eror=> 'erros')

   
}


module.exports =functions;