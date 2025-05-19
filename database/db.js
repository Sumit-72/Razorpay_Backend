import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect('mongodb+srv://Psquare:mongoDBatlas@mernapp.xh4pt.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp', {
            dbName: "paymentGateway",
        });
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;
