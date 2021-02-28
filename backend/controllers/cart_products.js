const cartRouter = require("express").Router();
const pool = require("../db");

cartRouter.get('/', async (req, res) => {
  try {
    const allProducts = await pool.query(`SELECT 
        products.product_id, 
        products.category_id,
        products.name,
        products.picture_key,
        json_agg(
            json_build_object('detail_key', product_details.product_detail_id, 
            'size', product_details.size)) AS SIZES
        FROM 
          products 
            INNER JOIN product_details
                ON products.product_id = product_details.product_id
                INNER JOIN CART_ITEMS
                    ON CART_ITEMS.product_detail_id = product_details.product_detail_id
        GROUP BY products.product_id, product_details.size;
      `);

    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

cartRouter.post('/', async (req, res) => {
  try {
    const product = req.body;
    await pool.query(
      `INSERT INTO cart_items (product_detail_id, quantity) VALUES($1, $2)`,
      [product.product_detail_id, 1]
    );
    const newCartProduct = await pool.query(
      `SELECT 
          products.product_id, 
          products.category_id,
          products.name,
          products.picture_key,
          product_details.product_detail_id,
          json_agg(
              json_build_object('detail_key', product_details.product_detail_id, 
              'size', product_details.size)) AS SIZES
          FROM 
            products 
              INNER JOIN product_details
                  ON product_details.product_detail_id = ($1) AND product_details.product_id = products.product_id
          GROUP BY products.product_id, product_details.product_detail_id;`,
      [product.product_detail_id]
    );

    res.json(newCartProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = cartRouter