import React from "react";
import "./contact_us.css";
import clsx from "clsx";
import styles from "../pages/index.module.css";

export default function ContactUs() {
  return (
    <div id="contact_us" className={clsx("hero shadow--lw", styles.heroBanner)}>
      <div className="container">
        {/* <ContactForm /> */}
        <h1 id="contact_us" name="contact_us" className="hero__title">
          {"Contact Us"}
        </h1>

        <form
          id="form"
          // action="https://formsubmit.co/contact@algomonkeys.io"
          action="https://formsubmit.co/269a11a5adee914f7e68e46593a13291"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <textarea
            placeholder="Your Message (Not Mandatory)"
            name="message"
            rows="5"
          />
          <button type="submit">Send</button>
          <input
            type="hidden"
            name="_next"
            value="https://www.algomonkeys.io"
          />
        </form>
      </div>
    </div>
  );
}
