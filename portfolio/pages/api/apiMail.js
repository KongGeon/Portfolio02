import { sendEmail } from "./sendEmail";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendEmail(
          req.body.name,
          req.body.from,
          req.body.message
        );
        res.status(200).json({ message: req.body.name + "님, 성공적으로 이메을을 전달했습니다." });
        break;
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