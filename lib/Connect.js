import { MongoClient } from "mongodb";

const url = `mongodb://localhost:27017/eCart/zSell`
// const url = `mongodb://localhost:27017/`

const Connection  = async () => {
    try{
        await MongoClient.connect(url)
        console.log("Connected Successfully!!!")
    } catch (error){
        console.log(error)
    }
}

export default Connection;