import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="footer-form"
        >
          <label htmlFor="email">Join the Mailing List:</label>
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
        <p className="footer-contact">Contact: janet@example.com</p>
      </div>
    </footer>
  );
}

export default Footer;
