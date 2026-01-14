document.addEventListener('DOMContentLoaded', () => {

  // ================= GLOBAL STATE =================
  let currentPage = 1;

  // ================= PAGE NAVIGATION =================
  function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const target = document.getElementById(`page${pageNumber}`);
    if (target) {
      target.classList.add('active');
      currentPage = pageNumber;
    }
  }

  // ================= BUTTON NEXT =================
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
      const parentPage = e.target.closest('.page');
      if (!parentPage) return;

      const pageId = parentPage.id.replace('page', '');

      // Page 3 handled separately (question)
      if (parentPage.id === 'page3') return;

      const next = parseInt(pageId) + 1;
      showPage(next);
    }
  });

  // ================= QUESTION LOGIC =================
  const options = document.querySelectorAll('.option');
  const feedback = document.getElementById('feedback');

  options.forEach(option => {
    option.addEventListener('click', () => {
      const answer = option.dataset.answer;

      if (answer === 'benar') {
        showPage(4);
      } else {
        feedback.innerText = 'Lah kok Cileunyi 😭 jelas-jelas Kopo!';
        feedback.style.color = '#ffe066';
        feedback.style.animation = 'shake 0.5s';

        setTimeout(() => {
          feedback.style.animation = '';
        }, 500);
      }
    });
  });

  // ================= FIRST BUTTON (WARNING) =================
  const warningBtn = document.getElementById('btn-warning');
  if (warningBtn) {
    warningBtn.addEventListener('click', () => {
      showPage(2);
    });
  }

  // ================= INIT =================
  showPage(1);

  // ================= LOVE FALL EFFECT =================
  function createLove() {
    const love = document.createElement('div');
    love.innerHTML = '💗';
    love.style.position = 'fixed';
    love.style.left = Math.random() * 100 + 'vw';
    love.style.top = '-30px';
    love.style.fontSize = Math.random() * 20 + 20 + 'px';
    love.style.animation = 'loveFall 4s linear forwards';
    love.style.zIndex = '9999';
    document.body.appendChild(love);

    setTimeout(() => love.remove(), 4000);
  }

  setInterval(createLove, 500);

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes loveFall {
      to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ================= BACKGROUND MUSIC =================
  const bgMusic = document.getElementById('bgMusic');

  function playMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {});
    document.removeEventListener('click', playMusic);
    document.removeEventListener('scroll', playMusic);
  }

  document.addEventListener('click', playMusic);
  document.addEventListener('scroll', playMusic);

  // ================= SLIDER AUTO =================
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  let index = 0;

  if (slides && images.length > 0) {
    setInterval(() => {
      index = (index + 1) % images.length;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  }

});
