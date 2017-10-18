const pgp = require('pg-promise')();

const connectionString = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'grocery_store',
    user: `${process.env.USER}`
};

// const connectionString = `postgres://${process.env.USER}@localhost:5432/grocery_store`

const db = pgp(connectionString)


const getItemsBySection = section => {
  return db.any(`
    SELECT name, section
    FROM items
    WHERE section = $1`, [section])
}

const getOrderByShopperId = id => {
  return db.any(`
    SELECT orders.order_id, SUM(items.price)
    AS total_cost
    FROM orders
    JOIN cart
    ON cart.order_id = orders.order_id
    JOIN items
    ON items.item_id = cart.item_id
    WHERE orders.shopper_id = $1
    GROUP BY orders.order_id
  `, [id])
}

const getRealShoppers = () => {
  return db.any(`
    SELECT shoppers.first_name, COUNT(orders.order_id)
    FROM shoppers
    JOIN orders
    ON orders.shopper_id = shoppers.shopper_id
    JOIN cart
    ON cart.cart_id = orders.order_id
    GROUP BY shoppers.first_name
  `)
}

module.exports = {
  getItemsBySection,
  getOrderByShopperId,
  getRealShoppers
}