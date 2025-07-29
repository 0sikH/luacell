document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".intro-banner");
  const slides = document.querySelectorAll(".slide-item");
  const progress = document.querySelector(".progress-bar .progress");
  const dots = document.querySelectorAll(".dot");

  let current = 0;

  // 배너 축소 애니메이션 (100vh → 400px)
  setTimeout(() => {
    banner.style.height = "400px";
  }, 4000);

  // 인디케이터 dot 활성화
  function updateIndicators(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  // 슬라이드 보여주기
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      const text = slide.querySelector(".slide-text");
      const image = slide.querySelector("img");

      // 초기화
      text.style.opacity = 0;
      text.style.transform = "translateY(20px)";
      image.style.opacity = 0;
    });

    const active = slides[index];
    active.classList.add("active");

    const text = active.querySelector(".slide-text");
    const image = active.querySelector("img");

    // 순차 등장 애니메이션
    setTimeout(() => {
      text.style.opacity = 1;
      text.style.transform = "translateY(0)";
    }, 300);
    setTimeout(() => {
      image.style.opacity = 1;
    }, 600);

    // 프로그레스 바 초기화 후 애니메이션
    progress.style.transition = "none";
    progress.style.width = "0%";
    setTimeout(() => {
      progress.style.transition = "width 5s linear";
      progress.style.width = "100%";
    }, 50);

    updateIndicators(index);
  }

  // 초기 슬라이드 표시
  showSlide(current);

  // 5초마다 자동 전환
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
});
