import emailjs from "emailjs-com";
import { useState } from "react";
import toast from "react-hot-toast";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const { name, email, subject, message } = formData;

  const isNotEmpty =
    !email ||
    email.length === 0 ||
    email.trim() === "" ||
    !message ||
    message.length === 0 ||
    message.trim() === "" ||
    !subject ||
    subject.length === 0 ||
    subject.trim() === "" ||
    !name ||
    name.length === 0 ||
    name.trim() === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNotEmpty) {
      return toast.error("All fields are required!", {
        style: {
          border: "1px solid #FF4B4B",
          padding: "16px",
          color: "#FF4B4B",
          backgroundColor: "#1F1F1F",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#FF4B4B",
          secondary: "#FFFAEE",
        },
      });
    }

    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        toast.success("Message Sent!", {
          style: {
            border: "1px solid #28A745",
            padding: "16px",
            color: "#28A745",
            backgroundColor: "#1F1F1F",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "#28A745",
            secondary: "#FFFAEE",
          },
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast.error("Oops! Something went wrong! Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="w-150 px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Subject..."
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded  px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
              />
            </div>
            <button
              type="submit"
              disabled={isNotEmpty || loading}
              className={`w-full  text-white py-3 px-4 font-medium cursor-pointer rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ${
                isNotEmpty ? "bg-gray-400" : "bg-blue-500"
              } `}>
              {loading ? <span className="animate-pulse">Sending...</span> : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
