// Preloader
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if(preloader){
        setTimeout(() => preloader.classList.add('hide'), 2000); // 2 секунды
    }
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема';
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            io.unobserve(entry.target);
        }
    });
},{threshold:0.15});
reveals.forEach(r => io.observe(r));

// Gallery Lightbox
const gallery = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeLightbox');
gallery?.addEventListener('click', e => {
    const img = e.target.closest('img');
    if(!img) return;
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
    lightbox.setAttribute('aria-hidden','false');
});
closeBtn?.addEventListener('click', ()=> {
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden','true');
    lightboxImg.src='';
});
lightbox?.addEventListener('click', e => {
    if(e.target === lightbox){
        lightbox.classList.remove('show');
        lightbox.setAttribute('aria-hidden','true');
        lightboxImg.src='';
    }
});
document.addEventListener('keydown', e => {
    if(e.key==='Escape'){
        lightbox?.classList.remove('show');
        lightboxImg.src='';
    }
});

// Copy email
const copyBtn = document.getElementById('copyEmail');
copyBtn?.addEventListener('click', async () => {
    const emailEl = document.getElementById('email');
    if(!emailEl) return;
    try {
        await navigator.clipboard.writeText(emailEl.textContent.trim());
        const old = copyBtn.textContent;
        copyBtn.textContent = 'Скопировано';
        setTimeout(()=> copyBtn.textContent=old,1500);
    } catch { alert('Не удалось скопировать'); }
});

const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('bgMusic');
let playing = false;
if (musicBtn && music) {
  musicBtn.addEventListener('click', () => {
    playing = !playing;
    if (playing) {
      music.play();
      musicBtn.textContent = '🔊 Музыка играет';
    } else {
      music.pause();
      musicBtn.textContent = '🎵 Музыка';
    }
  });
}

