import { Router } from "express";
import CTRLindex from "../Controllers/CTRLindex.js";

const product = Router();

product.get("/getproducts",CTRLindex.ProductCTRL.GetData)
product.post("/addproduct",CTRLindex.ProductCTRL.CreateProduct)
product.post("/updateproduct/:id",CTRLindex.ProductCTRL.UpdateData)
product.post("/deleteproduct/:id",CTRLindex.ProductCTRL.DeleteData)

export default product;