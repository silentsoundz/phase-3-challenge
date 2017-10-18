const{
  getItemsBySection,
  getOrderByShopperId,
  getRealShoppers
} = require('./database')


let productList = section => {
  let nameLength = `  Product Name    `.length
  let sectionLength = `  Section `.length
  console.log(`|-------------------+--------------+`);
  console.log(`| Product Name      | Section      |`);
  console.log(`|-------------------+--------------+`);
  let list = getItemsBySection(section)
    .then(items => {
      items.map(item => {
        console.log(
          "| " + item.name +
          (" ").repeat(nameLength - item.name.length)  +
          "| " +
          item.section +
          (" ").repeat(sectionLength - item.section.length) +
          "   |")
      })
    })
    .then( () => {console.log(`|-------------------+--------------+`)})
}


let shoppersOrders = argument => {
  let idLength = `order id`.length
  let totalLength = `total cost`.length
  console.log(`|----------+--------------|`);
  console.log(`| order id | total cost   |`);
  console.log(`|----------+--------------|`);
  let list = getOrderByShopperId(argument)
    .then(items => {
      items.map(item => {
        console.log(
          "| " +
          item.order_id +
          (" ").repeat(idLength - (item.order_id).toString().length)  +
          " | " +
          item.total_cost +
          (" ").repeat(totalLength - item.total_cost.length) +
          "   |")
      })
    })
    .then( () => {console.log(`|----------+--------------|`)})
}


let realShoppers = argument => {
  let nameLength = `shopper name`.length
  let orderLength = `number of orders`.length
  console.log(`|--------------+--------------------|`);
  console.log(`| shopper name |  number of orders  |`);
  console.log(`|--------------+--------------------|`);
  let list = getRealShoppers()
    .then(items => {
      items.map(item => {
        console.log(
          "| " +
          item.first_name +
          (" ").repeat(nameLength - item.first_name.length)  +
          " | " +
          (" ").repeat(orderLength - item.count.length) +
          item.count +
          "   |")
      })
    })
    .then( () => {console.log(`|--------------+--------------------|`)})
}





let func = process.argv[2]
let argument = process.argv[3]


switch (func) {
  case "product-list": productList(argument)
    break;
  case "shoppers-orders": shoppersOrders(argument)
    break;
  case "real-shoppers":
  realShoppers()
    break;
  default:
}