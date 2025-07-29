document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".intro-banner");
  const slides = document.querySelectorAll(".slide-item");
  const progress = document.querySelector(".progress-bar .progress");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  // 배너 축소 애니메이션 (초기 100vh → 400px)
  setTimeout(() => {
    banner.style.height = "400px";
  }, 4000);

  function updateIndicators(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      const text = slide.querySelector(".slide-text");
      const image = slide.querySelector("img");
      text.style.opacity = 0;
      text.style.transform = "translateY(20px)";
      image.style.opacity = 0;
    });

    const active = slides[index];
    active.classList.add("active");

    const text = active.querySelector(".slide-text");
    const image = active.querySelector("img");

    setTimeout(() => {
      text.style.opacity = 1;
      text.style.transform = "translateY(0)";
      image.style.opacity = 1;
    }, 300);

    // 프로그레스 바 초기화 후 재생
    progress.style.transition = "none";
    progress.style.width = "0%";
    setTimeout(() => {
      progress.style.transition = "width 5s linear";
      progress.style.width = "100%";
    }, 50);

    // 인디케이터 점 상태 업데이트
    updateIndicators(index);
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
});
