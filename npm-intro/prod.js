var prod=require('faker');
for (let i=0;i<=10;i++){
    console.log( prod.commerce.productName() +'='+ prod.commerce.price())
}
