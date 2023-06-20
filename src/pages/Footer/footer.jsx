import "./footer.css";

export function Footer(){
    return <>
    <footer>
  <div class="footer-container">
    <div class="footer-content">
      <h3 className="footer-h3">About Us</h3>
      <p className="footer-p">Copyright  2023 FlashCart. All Rights Reserved.</p>
    </div>
    <div class="footer-content">
      <h3>Contact</h3>
      <p className="footer-p">Email: info@example.com</p>
      <p className="footer-p">Phone: +1 123-456-7890</p>
    </div>
    <div class="footer-content">
      <h3>Follow me on</h3>
      <div >
        <a class="social-icons" href="/"><i class="fab fa-facebook-f"></i></a>
        <a class="social-icons" href="/"><i class="fab fa-twitter"></i></a>
        <a  class="social-icons"href="/"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</footer>
</>
}