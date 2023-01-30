import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Card from "../card/Card";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3kyyorn",
      "template_fe8v7me",
      form.current,
      "RIRBoiRM5_u4twJKk"
    );
    const sentmessage = document.querySelector("#sentmessage");
    const closeMessage = document.querySelector(".sentMessageIcon");
    sentmessage.classList.add("active");
    closeMessage.classList.add("active");
    e.target.reset();
  };

  const closeMessage = () => {
    const sentmessage = document.querySelector("#sentmessage");
    const closeMessage = document.querySelector(".sentMessageIcon");
    sentmessage.classList.remove("active");
    closeMessage.classList.remove("active");
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-marques-858865230/"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                icon={<AiFillLinkedin />}
                title="LinkedIn"
                text="Let's Conect"
              />
            </a>
          </article>
          <article className="contact__option">
            <a
              href="https://wa.me/+351932313394"
              target="_blank"
              rel="noreferrer"
            >
              <Card
                icon={<BsWhatsapp />}
                title="Whatsapp"
                text="Send Me a Message"
              />
            </a>
          </article>
          <article className="contact__option">
            <a
              href="mailto:andrelcm89pt@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Card icon={<AiOutlineMail />} title="Email" text="Email Me" />
            </a>
          </article>
        </div>
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <div id="sentmessage">
            Thanks for your message!
            <br /> I'll answer ASAP :)
            <div className="sentMessageIcon" onClick={closeMessage}>
              <IoIosClose />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
