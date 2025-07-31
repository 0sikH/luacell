document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".about-title");
  const text = document.querySelector(".about-text");

  const reveal = () => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.to(text, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out"
    });
  };

  // IntersectionObserver로 스크롤 등장 시점 제어
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        reveal();
        observer.disconnect(); // 한 번만 실행
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".about-section"));
});
