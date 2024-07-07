import Customer from "../../../models/customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", message: "an error in connecting to db" });
    return;
  }
  if (req.method === "POST") {
    const data = req.body.data;
    console.log(data);
    if (!data.name || !data.lastName || !data.email) {
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });
    }
    try {
      const customer = await Customer.create(data);

      res
        .status(201)
        .json({ status: "success", message: "data stored", data: customer });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: "faild", message: "an error in storing data in db" });
    }
  }
}
