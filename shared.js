// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
if(navbar){
  window.addEventListener('scroll',()=>{
    navbar.classList.toggle('solid', window.scrollY > 55);
  });
}

// ── HAMBURGER TOGGLE ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if(hamburger && mobileNav){
  hamburger.addEventListener('click',()=>{
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
},{ threshold:0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── SHARED FOOTER ──
(function(){
  const footerHTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="font-size:1.5rem"><img src="logo.png" alt="Karahi Palace Logo" style="height:42px;width:42px;object-fit:contain;flex-shrink:0;margin-right:2px;">Karahi <em>Palace</em></a>
      <p>Authentic Pakistani Halal Restaurant in Laurel, MD. Dine-In, Carryout & Catering. All specialties made to order.</p>
      <div class="footer-social">
        <a href="#" class="social-icon">f</a>
        <a href="#" class="social-icon">𝕏</a>
        <a href="#" class="social-icon">in</a>
        <a href="#" class="social-icon">📷</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Navigate</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="menu.html">Full Menu</a></li>
        <li><a href="about.html">Our Story</a></li>
        <li><a href="locations.html">Location</a></li>
        <li><a href="catering.html">Catering</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </div>
    /**<div class="footer-col">
      <h4>Order Online</h4>
      <ul>
        <li><a href="#">Order Direct (Best Price)</a></li>
        <li><a href="#">DoorDash</a></li>
        <li><a href="#">Uber Eats</a></li>
        <li><a href="#">Grubhub</a></li>
      </ul>
    </div>*/
    <div class="footer-col">
      <h4>Contact</h4>
      <p class="footer-contact-text">
        📍 3507 Fort Meade Road<br/>
        Laurel, MD 20724<br/><br/>
        📞 <a href="tel:301-755-8323" style="color:inherit;text-decoration:none">301-755-8323</a><br/><br/>
        ✉️ <a href="mailto:info@karahipalace.us" style="color:inherit;text-decoration:none">info@karahipalace.us</a><br/><br/>
        🕐 All Days: 11:00 AM – 11:00 PM<br/><br/>
        🍽️ Dine-In · Carryout · Catering<br/>
        🌙 100% Halal · Alcohol Free
      </p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Karahi Palace. All rights reserved. · 100% Halal · Authentic Desi Cuisine</p>
    <p><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></p>
  </div>
</footer>`;

  const placeholder = document.getElementById('site-footer');
  if(placeholder){
    placeholder.outerHTML = footerHTML;
  }
})();
