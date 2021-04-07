const fader1 = $('#fader1');
const fader2 = $('#fader2');
const fader3 = $('#fader3');
console.log(fader1, fader2, fader3);
const sectionOptions = {
  rootMargin: '-200px',
  threshold: 0,
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      sectionObserver.unobserve(entry.target);
    }
  });
},
sectionOptions);

sectionObserver.observe(fader1[0]);
sectionObserver.observe(fader2[0]);
sectionObserver.observe(fader3[0]);
