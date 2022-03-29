// Animation
const callback = function (entries) {
    entries.forEach((entry) => {
      const animationType = entry.target.dataset.animateType;
      if (entry.isIntersecting) {
      entry.target.classList.add(animationType);
      }
    });
  };
  const observer = new IntersectionObserver(callback);
  const targets = document.querySelectorAll(".js-show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });