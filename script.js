// efek bunga jatuh
const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



let flowers = [];

function createFlower() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: 10 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    sway: Math.random() * 2,
    angle: Math.random() * Math.PI * 2
  };
}

const snowflakeImg = new Image();
snowflakeImg.src = 'images/petal.png'; // atau bunga kamu

function drawFlower(f) {
  ctx.drawImage(snowflakeImg, f.x, f.y, f.size, f.size);
}

let scrollSpeedMultiplier = 1;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // Semakin scroll ke bawah, semakin cepat bunga jatuh
  scrollSpeedMultiplier = 1 + scrollY / 1000;
});

const faders = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(el => observer.observe(el));




function updateFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (flowers.length < 80) {
    flowers.push(createFlower());
  }

  flowers.forEach((f, i) => {
    f.y += f.speed * scrollSpeedMultiplier;
    f.x += Math.sin(f.angle) * f.sway;
    f.angle += 0.01;

    drawFlower(f);

    if (f.y > canvas.height) {
      flowers[i] = createFlower();
    }
  });

  requestAnimationFrame(updateFlowers);
}


function closePopup() {
    document.getElementById('popup').classList.remove('show');
  }
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('popup').classList.add('show');
    }, 800);
  });

  
function updateFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (flowers.length < 80) {
    flowers.push(createFlower());
  }

  flowers.forEach((f, i) => {
    f.y += f.speed;
    f.x += Math.sin(f.angle) * f.sway;
    f.angle += 0.01;

    drawFlower(f);

    if (f.y > canvas.height) {
      flowers[i] = createFlower();
    }
  });

  requestAnimationFrame(updateFlowers);
}
// Carousel logic
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
let currentIndex = 0;

function updateCarousel() {
  const slideWidth = track.clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  const total = track.children.length;
  if (currentIndex < total - 1) currentIndex++;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);


updateFlowers();

function closePopup() {
    document.getElementById('popup').classList.remove('show');
  }
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('popup').classList.add('show');
    }, 800);
  });