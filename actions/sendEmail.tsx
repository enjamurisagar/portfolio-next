"use server";
import React from "react";

import { Resend } from "resend";

import { getErrorMessage, validateString } from "@/lib/utils";

import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_key);
export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 100)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 1000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "enjamurisagar@gmail.com",
      subject: "Message from contact form",
      reply_to: email as string,
      //   text: message as string,
      // react: <ContactFormEmail email={email} message={message} />, OR
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
