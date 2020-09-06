//convertendo um objeto para um json
//percebe que o método JSON.stringify() ignora a função soma() mesmo que ela faça parte do objeto, 
//visto que esse método JSON.stringify() serve apenas para converter um objeto e não para executar uma função 
const obj = {a:1,b:2,c:3, soma(){ return a+b+c}}
console.log(JSON.stringify(obj))

//convertendo um json para um objeto
console.log(JSON.parse('{"a": "1", "b": "2", "c": "3", "Situation": true}'))

//atribuito um json em um objeto criado
const obj2 = new Object(JSON.parse('{"CompanyCode": "21", "VendorCode": "RODRIGONAC", "ItemCode": "700069", "Situation": "h"}'))
console.log(obj2)


