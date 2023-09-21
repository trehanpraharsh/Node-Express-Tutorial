const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", function (req, res) {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", function (req, res) {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

//* ":name" is used for routing and it can be read from req.params method, this will hold the value of parameter. By default the parameter is string
app.get("/api/products/:productID", function (req, res) {
  //   console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) =>
      // console.log(product.id);
      // console.log(Number(productID));
      product.id == Number(productID)
  );

  //   console.log(singleProduct);
  if (!singleProduct) {
    return res.status(404).send("Product does not Exist");
  }

  return res.json(singleProduct);
});

//* This method is generally used to filter results  etc for websites
app.get("/api/products/:productID/reviews/:reviewID", function (req, res) {
  // console.log(req.params);
  const { productID, reviewID } = req.params;
  res.send(
    `Hello to the World of Reviews for productID : ${productID} and reviewID : ${reviewID}`
  );
});

//* Product Query, used for sorting or searching specific results.
//* eg :- url/search?name=praharsh&id=5
//? req.query hold the query and the value whatever you enter after the url
app.get("/api/v1/query", function (req, res) {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No Products Matched your Search :(");
    return res.status(200).json({ success: "true", data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(6969, function () {
  console.log("Server is running on port 6969...");
});
