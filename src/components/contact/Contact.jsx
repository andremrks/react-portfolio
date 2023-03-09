import { useState } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import Card from "../card/Card";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Result = () => {
  return (
    <p>Thanks for your message, I'll contact you soon :)</p>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8h469hb",
        "template_8ai7gx8",
        e.target,
        "RIRBoiRM5_u4twJKk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
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
            <form className="contact__form" onSubmit={sendEmail}>
              <div class="form__group field">
                <input
                  id="name"
                  required
                  placeholder="Name"
                  name="name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Name
                </label>
              </div>
              <div class="form__group field">
                <input
                  id="email"
                  required
                  placeholder="Email"
                  name="email"
                  class="form__field"
                  type="email"
                />
                <label class="form__label" for="email">
                  Email
                </label>
              </div>
              <div class="form__group field">
                <input
                  id="subject"
                  required
                  placeholder="Subject"
                  name="subject"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="subject">
                  Subject
                </label>
              </div>
              <div class="form__group field">
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  placeholder="Your Message"
                  required
                  class="form__field"
                  style={{ width: "100%", height: "135px" }}
                ></textarea>
                <label class="form__label" for="message">
                  Your Message
                </label>
              </div>
              <div className="sentMessage">{result ? <Result /> : null}</div>
              <button type="submit" class="button btn-send">
                <span class="button_lg">
                  <span class="button_sl"></span>
                  <span class="button_text">Send</span>
                </span>
              </button>
            </form>
          </Fade>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
