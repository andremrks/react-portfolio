import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import Card from "../card/Card";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsPatchCheck } from "react-icons/bs";
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
    const closeMessage = document.querySelector(".closeBtn");
    sentmessage.classList.add("active");
    closeMessage.classList.add("active");
    e.target.reset();
  };

  const closeMessage = () => {
    const sentmessage = document.querySelector("#sentmessage");
    const closeMessage = document.querySelector(".closeBtn");
    sentmessage.classList.remove("active");
    closeMessage.classList.remove("active");
  };
  return (
    <section id="contact">
      <Fade right>
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
          <Fade bottom>
            <form ref={form} className="contact__form" onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <div id="sentmessage">
                <div className="sentMessage__icon">
                  <BsPatchCheck />
                </div>
                <p>Thanks for your message!</p>
                <small>I'll answer ASAP :)</small>
                <button
                  className="btn btn-primary closeBtn"
                  onClick={closeMessage}
                >
                  Close
                </button>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </Fade>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
