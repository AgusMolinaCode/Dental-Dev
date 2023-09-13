import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(
    `mongodb+srv://root:${process.env.MONGODB_KEY}@cluster0.ffgb9td.mongodb.net/?retryWrites=true&w=majority`
  );

  connection.on("connected", () => {
    console.log("Mongoose is connected");
    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState;
  });

  connection.on("disconnected", (err) => {
    console.log("Mongoose is disconnected", err);
  });
}
