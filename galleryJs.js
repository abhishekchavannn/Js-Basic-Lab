let images = ["./images/expanse.png",
  "./images/him.jpg",
  "./images/inter.jpg",
  "./images/books.jpg",
  "./images/paneer.jpg"
]

let sub = ["Favourite Series: Hundreds of years later, the humans divide by politics in Mars, Earth and Belt regions, a virus named Protomolecule makes the human life difficult creating wars between the interplanetry countries.",
  "Favourite Place: The Himalayas, or Himalaya are a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the planet's highest peaks, including the highest, Mount Everest.",
  "Favourite Movie: When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  "Favourite Books: Author named James S A Corey has a series of sci-fi books which are hundreds of years ahead. Leviathan wakes being one of his famous out of the series.",
  "Favourite Food: When it comes to paneer, most of the Indians fall in love with the gravy immediately. Butter paneer masala is one of my favourite dish and I can have it many times without getting bored"
];

let index = 0;

function caraousel() {
  const imag = document.getElementById("image-car");
  const capt = document.getElementById("caption-car");
  imag.src = images[index];
  capt.innerHTML = sub[index];
}

function back() {
  if (index == 0)
    index = images.length - 1;
  else
    index--;
  caraousel();
}

function next() {
  if (index == images.length - 1)
    index = 0;
  else index++;
  caraousel();
}
window.onload = caraousel();


document.getElementById("back").addEventListener("click",()=>{
  console.log("");
  back();
});
document.getElementById("next").addEventListener("click",()=>{
  console.log("");
  next();
});
