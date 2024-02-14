import React, { useRef ,useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5nb8xf8", "template_6cc3z9p", form.current, {
        publicKey: "GphF5LXpXxf0_r8zP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
          setFormSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="Contact">
      <h1 className="text-center pt-12 text-4xl ">Contactez-moi</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
        {isFormSubmitted ? (
            <p className="text-green-500 text-center mb-5">
              Votre message a été envoyé avec succès!
            </p>
          ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label
                
                className="mb-3 block text-base font-medium text-black"
              >
                Nom
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Nom"
                required="required"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
              
                className="mb-3 block text-base font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="example@domain.com"
                required="required"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
             
                className="mb-3 block text-base font-medium text-black"
              >
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Objet "
                required="required"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
               
                className="mb-3 block text-base font-medium text-black"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Tapez votre message"
                required="required"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none">
                Envoyer
              </button>
            </div>
          </form>)}
        </div>
      </div>
    </section>
  );
};

export default Contact;
