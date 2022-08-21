import React from "react";
import styles from "./contact_us.module.css";
import button_styles from "./button.module.css";
import Title, { PinkPart } from "./title";

export default function ContactUs() {
  return (
    // id for anchor link
    <div id="contact_us" className={styles.contact_us_container}>
      <Title>
        Let's <PinkPart>Talk</PinkPart>
      </Title>

      <form
        className={styles.form}
        // action="https://formsubmit.co/contact@algomonkeys.io"
        action="https://formsubmit.co/269a11a5adee914f7e68e46593a13291"
        method="POST"
      >
        <input type="text" name="name" aria-label="name" placeholder="Name*" required />
        <input type="email" name="email" aria-label="email" placeholder="Email*" required />
        <textarea
          placeholder="Want to add something about your problem?"
          name="message"
          aria-label="optional message"
          rows="5"
        />
        <button className={`${button_styles.btn} ${button_styles.main_pink}`} type="submit">
          Send
        </button>
        <input type="hidden" name="_next" value="https://www.algomonkeys.io" />
      </form>
    </div>
  );
}
