'use server';

import { Subscriber } from '@/models/subs-model';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  try {
    const email = formData['email'];
    const fullName = formData['fullName'];
    // console.log(email, fullName);

    if (!email) return null;

    const foundSubcriber = await Subscriber.findOne({ email: email }).lean();

    if (!foundSubcriber) {
      const subscribersPayload = {
        name: fullName,
        email,
      };

      await Subscriber.create(subscribersPayload);

      const message = `Dear ${fullName}, Thank you for Subscribing to tapaScript Newsletter. the door towards the abundance of knowladge is now open. Enjoy`;
      await resend.emails.send({
        form: 'noreply@noreply.tahrimraju.blogspot.com',
        to: email,
        subject: 'Congratulations!!! for Newletter subscribed.',
        react: EmailTemplate({ message }),
      });
    } else {
      throw new Error(`${email} subscribed Already!`);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}
