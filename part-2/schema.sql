CREATE TABLE items (
item_id  SERIAL PRIMARY KEY,
name VARCHAR(250),
price NUMERIC(5,2),
section VARCHAR(100)
);

CREATE TABLE shoppers (
shopper_id  SERIAL PRIMARY KEY,
last_name VARCHAR(77) ,
first_name VARCHAR(77),
email VARCHAR(77)
);

CREATE TABLE orders (
order_id  SERIAL PRIMARY KEY,
date DATE NOT NULL DEFAULT CURRENT_DATE,
shopper_id INTEGER REFERENCES shoppers (shopper_id) NOT NULL
);


CREATE TABLE cart (
cart_id SERIAL PRIMARY KEY,
order_id INTEGER REFERENCES orders(order_id),
item_id INTEGER REFERENCES items(item_id)
);