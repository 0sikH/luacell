// fade-in 애니메이션
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fadein");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));
});
