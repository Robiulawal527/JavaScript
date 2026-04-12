const reviews = [
  { id: 1, name: "susan smith", job: "web developer", text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up." },
  { id: 2, name: "anna johnson", job: "web designer", text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen." },
  { id: 3, name: "peter jones", job: "intern", text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal." },
  { id: 4, name: "bill anderson", job: "the boss", text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan." }
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

function showPerson(personIndex) {
  const item = reviews[personIndex];
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", () => showPerson(currentItem));

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) currentItem = 0;
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) currentItem = reviews.length - 1;
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * reviews.length);
  currentItem = randomIndex;
  showPerson(currentItem);
});
