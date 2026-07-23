const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => navigation.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const countdown = document.querySelector('.countdown');
if (countdown) {
  const target = new Date(countdown.dataset.date).getTime();
  const update = () => {
    const difference = Math.max(0, target - Date.now());
    document.getElementById('days').textContent = Math.floor(difference / 86400000);
    document.getElementById('hours').textContent = String(Math.floor((difference % 86400000) / 3600000)).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((difference % 3600000) / 60000)).padStart(2, '0');
  };
  update();
  setInterval(update, 60000);
}

document.getElementById('current-year').textContent = new Date().getFullYear();

const modal = document.getElementById('poster-modal');
const modalImage = document.getElementById('modal-image');
document.querySelectorAll('.poster-open').forEach(button => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.poster;
    modal.showModal();
  });
});
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});
