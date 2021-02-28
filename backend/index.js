const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("build"));

//middleware
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const allProducts = await pool.query(`SELECT 
    products.product_id, 
    products.category_id,
    products.name,
    products.gender,
    products.picture_key,
    json_agg(
        json_build_object('detail_key', product_details.product_detail_id, 
        'size', product_details.size)) AS SIZES
    FROM 
      products 
        INNER JOIN product_details
            ON products.product_id = product_details.product_id
    GROUP BY products.product_id;
  `);

    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
