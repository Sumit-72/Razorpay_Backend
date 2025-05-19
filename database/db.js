import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect('//', {
            dbName: "paymentGateway",
        });
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;
