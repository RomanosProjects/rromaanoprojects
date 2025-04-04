// Aggiorna l'anno corrente nel footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden'; // Impedisce lo scorrimento della pagina
});

mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = ''; // Ripristina lo scorrimento della pagina
});

// Chiudi il menu mobile quando si clicca su un link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Pulsante Torna in cima
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Gestione del form di contatto (esempio)
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Qui puoi aggiungere la logica per inviare il form
  // Per esempio, usando fetch per inviare i dati a un server
  
  // Esempio di raccolta dati dal form
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  console.log('Form inviato:', formData);
  
  // Reset del form dopo l'invio
  contactForm.reset();
  
  // Feedback all'utente (puoi sostituire con una UI migliore)
  alert('Messaggio inviato con successo!');
});