import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(
    `mongodb+srv://root:${process.env.MONGODB_KEY}@cluster0.ffgb9td.mongodb.net/?retryWrites=true&w=majority` ||
      "mongodb://127.0.0.1:27017/Reservas"
    
  );
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;

  connection.on("connected", () => {
    console.log("Mongoose is connected");
  });

  connection.on("disconnected", (err) => {
    console.log("Mongoose is disconnected", err);
  });
}
