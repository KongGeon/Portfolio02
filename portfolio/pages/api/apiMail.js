import { sendEmail } from "./sendEmail";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        // await sendEmail(
        //   req.body.name,
        //   req.body.from,
        //   req.body.message
        // );
         //리다이렉트 : 해당 페이지로 이동
         return res.status(200).json(req.body.name)
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        // res.status(200).send("No");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;