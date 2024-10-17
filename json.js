const user = {Name: 'shahriar', Id: 192352880};
//javascript obejct notation
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop ={
    owner: 'Shahriar',
    address: {
        street: 'satmosjid road',
        city: 'dhaka',
        country: 'bangladesh'
    },
    products:['laptop', 'headphone','monitor'],
    revenue: 10000000,
    isOpen:true,
    isNew: false
}
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopParse = JSON.parse(shopJSON);
console.log(shopParse);