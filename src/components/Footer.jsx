function Footer() {
  return (
    <footer>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <label htmlFor="email">Join the Mailing List:</label>
        <input type="email" name="email" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
      </form>
      <p>Contact: janet@example.com</p>
    </footer>
  );
}
