let currentPage = 1;

function showPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${n}`).classList.add('active');
  currentPage = n;
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn') && !e.target.classList.contains('option')) {
    showPage(currentPage + 1);
  }
});

document.querySelectorAll('.option').forEach(btn => {
  btn.onclick = () => {
    if (btn.dataset.answer === 'benar') {
      showPage(4);
    } else {
      document.getElementById('feedback').innerText = 'Salah 😭';
    }
  };
});

// MUSIC
const bgMusic = document.getElementById('bgMusic');
document.addEventListener('click', () => {
  bgMusic.play().catch(()=>{});
}, { once:true });

// SLIDER
const slides = document.querySelector('.slides');
const imgs = document.querySelectorAll('.slides img');
let index = 0;

setInterval(() => {
  index = (index + 1) % imgs.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

// KOMENTAR
function addComment() {
  const name = username.value;
  const text = comment.value;
  if (!name || !text) return;

  const div = document.createElement('div');
  div.className = 'comment-item';
  div.innerHTML = `<b>${name}</b><br>${text}`;
  commentList.prepend(div);

  username.value = '';
  comment.value = '';
}
