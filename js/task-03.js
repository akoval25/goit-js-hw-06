const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const imageEL = images
  .map((image) => `<li class="list-item new">	
<img src="${image.url}" alt="${image.alt}" width="500px"></li>`)
  .join("");

galleryRef.insertAdjacentHTML("beforeend", imageEL);
 
galleryRef.style.display = "flex";
galleryRef.style.listStyle = "none";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.justifyContent = "space-between";