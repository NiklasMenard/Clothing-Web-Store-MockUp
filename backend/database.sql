CREATE TABLE categories (
    product_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE CATEGORIES (
    category_id  INT PRIMARY KEY NOT NULL,
    name VARCHAR(100)
);


CREATE TABLE PRODUCT_DETAILS (
    product_detail_id  INT PRIMARY KEY NOT NULL,
    product_id int,
    size VARCHAR(15),
    color VARCHAR(50),
    CONSTRAINT fk_products
        FOREIGN KEY(product_id) 
        REFERENCES products(product_id)
);

CREATE TABLE PRODUCTS (
    product_id  INT PRIMARY KEY NOT NULL,
    category_id int,
    name VARCHAR(100),
    description VARCHAR(100),
    picture_url VARCHAR(100),
    price int,
    CONSTRAINT fk_categories
        FOREIGN KEY(category_id) 
        REFERENCES categories(category_id)
);

CREATE TABLE CART_ITEMS (
    cart_item_id  INT PRIMARY KEY NOT NULL,
    product_detail_id int,
    quantity int,
    CONSTRAINT fk_product_details
        FOREIGN KEY(product_detail_id) 
        REFERENCES PRODUCT_DETAILS(product_detail_id)
);


UPDATE PRODUCT_DETAILS
SET size = '35W x 32L'
WHERE product_detail_id = 33;

alter table products alter column picture_url type character varying(250);

ALTER TABLE products
ALTER COLUMN picture_url TYPE INT 
USING picture_url::integer;

ALTER TABLE products 
RENAME picture_url TO picture_key;



INSERT INTO PRODUCT_DETAILS (product_detail_id, product_id, size, color)
VALUES (DEFAULT, 5, '40', 'Blue');

INSERT INTO PRODUCT_DETAILS (product_detail_id, product_id, size, color)
VALUES (9, 5, '35W x 30L', 'Blue');

INSERT INTO PRODUCT_DETAILS (product_detail_id, product_id, size, color)
VALUES (10, 6, '35W x 32L', 'Blue');

INSERT INTO CART_ITEMS (cart_item_id, product_detail_id, quantity)
VALUES (DEFAULT, 1, 1);

INSERT INTO categories (category_id, name)
VALUES (1, 'PANTS')

INSERT INTO PRODUCTS (product_id, category_id, name, gender, picture_url_key, price)
VALUES (18, 3, 'Women Shirt 3', 'female', 5, 15);

INSERT INTO PRODUCT_DETAILS (product_detail_id, product_id, name, size, color)
VALUES (18, 3, 'Women Shirt 3', 'female', 5, 15);


SELECT products.product_id, product_details.size
FROM products
INNER JOIN product_details
ON products.product_id = product_details.product_id;

///
SELECT 
  products.product_id, 
  products.category_id,
  products.name,
  products.gender,
  products.picture_key,
  json_agg(
      json_build_object('detail_key', product_details.product_detail_id, 'size', product_details.size)) AS SIZES
FROM 
  products 
    INNER JOIN product_details
        ON products.product_id = product_details.product_id
GROUP BY products.product_id
ORDER by products.product_id ASC;

///


SELECT 
  products.product_id, 
  products.category_id,
  products.name,
  products.gender,
  products.picture_key,
  json_agg(
      json_build_object('detail_key', product_details.product_detail_id, 'size', product_details.size)) AS SIZES
FROM 
  products 
    INNER JOIN product_details
        ON products.product_id = product_details.product_id
        INNER JOIN CART_ITEMS
            ON CART_ITEMS.product_detail_id = product_details.product_detail_id
GROUP BY products.product_id, product_details.size;







