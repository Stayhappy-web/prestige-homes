function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Us</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <textarea
          rows="5"
          placeholder="Message"
        />

        <button>
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;