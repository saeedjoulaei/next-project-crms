import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: "error in connecting to the database",
    });
    Rreturn;
  }
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "data deleted" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({
          status: "failed",
          message: "an error in deleting data accured",
        });
    }
  }
}