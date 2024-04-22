"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnyaro");
  if (state.succeeded) {
    return (
      <p className="absolute w-2/3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        Thanks for the message! I will get back to you shortly.
      </p>
    );
  }

  return (
    <div>
      <p className="text-center text-sm px-6 mt-44">
        Use the form to below to reach out to me! I will use the email provided
        to get back to you.
      </p>
      <form
        onSubmit={handleSubmit}
        className="absolute w-5/6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Input placeholder="Email" id="email" name="email"></Input>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Textarea
          className="mt-3"
          id="message"
          name="message"
          placeholder="Message"
        ></Textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button className="mt-5" type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </form>
    </div>
  );
}
