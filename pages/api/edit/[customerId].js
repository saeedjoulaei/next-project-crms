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
  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.email = data.email;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      customer.save();
      res
        .status(200)
        .json({ status: "success", message: "data edited", data: customer });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({
          status: "failed",
          message: "An Error In Retrieving Data From DataBase",
        });
    }
  }
}
