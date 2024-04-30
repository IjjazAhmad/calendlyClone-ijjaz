import toast from "react-hot-toast";
import emailjs from "emailjs-com";
type SendMailFunProps = {
  hostName: string;
  description: string;
  hostEmail: string | null;
  schedulerName: string;
  schedulerEmail: string;
  selectedTime: string | null;
  selectedDate: string | null;
};
export const sendMailFun = async ({
  hostName,
  description,
  hostEmail,
  schedulerName,
  schedulerEmail,
  selectedTime,
  selectedDate,
}: SendMailFunProps) => {
  try {
    const serviceId = "service_u5oyxge";
    const templateId = "template_kjne7cz";
    const userId = "KAENAelWGOpCqlwvw";

    const templateParams = {
      from_name: "Calendly",
      to_name: hostName, //hostname
      user_email: hostEmail, //host email
      user_name: hostName, //invitee name
      reply_to: schedulerEmail, //invitee email

      schedulerName: schedulerName, //invitee name
      schedulerEmail: schedulerEmail, //invitee email
      selectedTime: selectedTime,
      selectedDate: selectedDate,
      fullname: hostName,
      // timeZone: "Karachi, Pakistan",
      description: description, //description
    };

    emailjs.init(userId);

    await emailjs.send(serviceId, templateId, templateParams);

    toast.success("Email sent to owner successfully!");
  } catch (error) {
    toast.error("Error sending email to owner");
    console.log("Error sending email:", error);
  }
};
