import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contactForm");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      alert("Form submitted successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Error submitting the form! Please try again.");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="lg:pt-[200px] md:pt-[250px] pt-[200px]">
      <h2 className="text-6xl font-bold">Contact</h2>
      <span className="text-emerald-400	font-bold">LETS TALK</span>

      <div className="form w-full contact-wrapper mt-11">
        <form onSubmit={handleSubmit}>
          <span className="relative block">
            <label className="absolute p-2 top-[-20px] left-[30px] text-xs ">
              FullName*
            </label>
            <input
              className="bg-transparent border  rounded-full p-5 "
              placeholder="Yuvraj Singh"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </span>
          <span className="relative block mt-10">
            <label className="absolute p-2 top-[-20px] left-[30px] text-xs ">
              Email Address*
            </label>
            <input
              type="email"
              className="bg-transparent border  rounded-full p-5 "
              placeholder="abc@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </span>
          <span className="relative block mt-10">
            <label className="absolute p-2 top-[-20px] left-[30px] text-xs ">
              Message*
            </label>
            <textarea
              type="email"
              className="bg-transparent border  rounded-2xl	 p-5 "
              placeholder="To write"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            ></textarea>
          </span>
          <button
            type="submit"
            className="submit-btn p-5 text-sm mt-5 rounded-full inline-block cursor-pointer"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
