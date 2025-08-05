// const ---> value not going to change
// let ---> value can change
// var ---< should not use (unless exceptional cases)

const price = 8908;
//console.log(price);

const name = "abu hena mosaddir"; //string
const isRich = true; //boolean
//nonpremetive

const person = ['newon', 'nion', 'kion']
const student = { class:4, name:'kamal', age: 12, address: 'nion ghor'}



//conditional

if ( price < 1000 ){
    console.log('not expensive')
}
else if (price < 10000){
    console.log('Huge expensive')
}
else{
    console.log('Expensive')
}