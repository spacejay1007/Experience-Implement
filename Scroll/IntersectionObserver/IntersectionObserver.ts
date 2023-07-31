//

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
const io = new IntersectionObserver(observerCallback, options);

io.observe(element);
