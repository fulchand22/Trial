import e from "express";
import App from "./App.js";
import Connection from "./lib/Connect.js";
import Routes from "./Routing/RoutingIndex.js";

const port = 3000
Connection();
App.use(e.json())


App.use("/product",Routes.product)

App.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})