\copy items(name, price, section) FROM './items.csv' WITH DELIMITER ',' CSV HEADER;


INSERT INTO shoppers (last_name, first_name, email)
    VALUES ('Lannister', 'Tyrion', 'ikilledmyfather@gmail.com');
INSERT INTO shoppers (last_name, first_name, email)
    VALUES ('Taragaryen', 'Daenerys', 'motherofdragons@gmail.com');
INSERT INTO shoppers (last_name, first_name, email)
    VALUES ('Snow', 'Jon', 'whowonbattleofthebastards@gmail.com');
INSERT INTO shoppers (last_name, first_name, email)
    VALUES ('Stark', 'Sansa', 'byebyelittlefinger@gmail.com');
INSERT INTO shoppers (last_name, first_name, email)
    VALUES ('Stark', 'Arya', 'thegirlhasaname@gmail.com');

INSERT INTO orders (shopper_id, date)
    VALUES (1, '1977-12-01');
INSERT INTO orders (shopper_id, date)
    VALUES (2, '1977-04-20');
INSERT INTO orders (shopper_id, date)
    VALUES (3, '1977-01-01');
INSERT INTO orders (shopper_id, date)
    VALUES (4, '1977-05-20');
INSERT INTO orders (shopper_id, date)
    VALUES (5, '1977-06-01');
INSERT INTO orders (shopper_id, date)
    VALUES (1, '1977-08-20');
INSERT INTO orders (shopper_id, date)
    VALUES (2, '1977-09-01');
INSERT INTO orders (shopper_id, date)
    VALUES (3, '1977-07-20');
INSERT INTO orders (shopper_id, date)
    VALUES (4, '1977-02-01');
INSERT INTO orders (shopper_id, date)
    VALUES (5, '1977-03-20');


INSERT INTO cart (order_id, item_id)
    VALUES (1, 1);
INSERT INTO cart (order_id, item_id)
    VALUES (1, 13);
INSERT INTO cart (order_id, item_id)
    VALUES (2, 9);
INSERT INTO cart (order_id, item_id)
    VALUES (2, 17);
INSERT INTO cart (order_id, item_id)
    VALUES (3, 7);
INSERT INTO cart (order_id, item_id)
    VALUES (3, 3);
INSERT INTO cart (order_id, item_id)
    VALUES (4, 12);
INSERT INTO cart (order_id, item_id)
    VALUES (4, 8);
INSERT INTO cart (order_id, item_id)
    VALUES (5, 16);
INSERT INTO cart (order_id, item_id)
    VALUES (5, 19);
INSERT INTO cart (order_id, item_id)
    VALUES (6, 11);
INSERT INTO cart (order_id, item_id)
    VALUES (6, 7);
INSERT INTO cart (order_id, item_id)
    VALUES (7, 5);
INSERT INTO cart (order_id, item_id)
    VALUES (7, 8);
INSERT INTO cart (order_id, item_id)
    VALUES (8, 3);
INSERT INTO cart (order_id, item_id)
    VALUES (8, 2);
INSERT INTO cart (order_id, item_id)
    VALUES (9, 6);
INSERT INTO cart (order_id, item_id)
    VALUES (9, 4);
INSERT INTO cart (order_id, item_id)
    VALUES (10, 18);
INSERT INTO cart (order_id, item_id)
    VALUES (10, 20);
