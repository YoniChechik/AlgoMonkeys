import React from "react";
import "./contact_us.css";
import "./button.css";
import Title, { PinkPart } from "./title";

export default function ContactUs() {
  return (
    // id for anchor link
    <div id="contact_us">
      <Title>
        Let's <PinkPart>Talk</PinkPart>
      </Title>

      <form
        className="AMForm"
        // action="https://formsubmit.co/contact@algomonkeys.io"
        action="https://formsubmit.co/269a11a5adee914f7e68e46593a13291"
        method="POST"
      >
        <input type="text" name="name" placeholder="Name*" required />
        <input type="email" name="email" placeholder="Email*" required />
        <textarea
          placeholder="Want to add something about your problem?"
          name="message"
          rows="5"
        />
        <button className="custom-btn main-pink" type="submit">
          Send
        </button>
        <input type="hidden" name="_next" value="https://www.algomonkeys.io" />
      </form>
    </div>
  );
}
