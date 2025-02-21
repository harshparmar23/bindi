// src/app/api/send-message/route.ts
import twilio from "twilio";

export async function POST(request: Request) {
  const { phoneNumber, message } = await request.json();
  const accountSid: string = "ACc1e760a866120b8ae2166dbef01ee333";
  const authToken: string = "6ed5a07ba1822467b242dda7ee6aa249";

  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: message,
      from: "whatsapp:+14155238886", // Your Twilio WhatsApp number
      // to: "whatsapp:+918320846640", // Recipient number
      to: "whatsapp:+917600960068", // Recipient number
    })
    .then((message: { sid: string }) =>
      console.log(`Message sent with SID: ${message.sid}`)
    )
    .catch((error: unknown) =>
      console.error(`Error sending message: ${error}`)
    );
}
