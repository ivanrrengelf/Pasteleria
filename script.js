// Toggle mobile nav
const navToggleButton = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggleButton && siteNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Simple add-to-cart notification (demo only)
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.getAttribute('data-item');
    showToast(`${item} agregado al pedido`);
  });
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed', left: '50%', bottom: '24px', transform: 'translateX(-50%)',
    background: '#2a2730', color: '#fff', padding: '10px 14px', borderRadius: '10px',
    boxShadow: '0 10px 24px rgba(0,0,0,0.15)', zIndex: 1000, opacity: '0', transition: 'opacity 200ms'
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = '1'; });
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 200); }, 1800);
}

// Contact form (client-side only demo)
const contactForm = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(contactForm);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message) {
      updateStatus('Por favor completá todos los campos.');
      return;
    }
    updateStatus('¡Gracias! Te contactaremos a la brevedad.');
    contactForm.reset();
  });
}

function updateStatus(text) {
  if (statusEl) statusEl.textContent = text;
}


