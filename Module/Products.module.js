import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  categorie: { type: String },
  description: { type: String },
  rating: { type: Number },
});

const Products = new mongoose.model("Products", ProductsSchema);

export default Products;
