// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> mailto
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name'));
    const email = encodeURIComponent(data.get('email'));
    const message = encodeURIComponent(data.get('message'));
    const body = `お名前: ${name}%0D%0Aメール: ${email}%0D%0A%0D%0A${message}`;

    // ✅ ここをあなたのメールに変更してください
    const to = 'adachi@alm.ne.jp';

    window.location.href = `mailto:${to}?subject=ポートフォリオ経由の連絡&body=${body}`;
  });
}
