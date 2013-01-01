let dogArray = [];

function Dog(image, name, price) {
    this.image =image,
    this.name =name,
    this.price =price
};

let dog1 = new Dog("tiny-white.jpg", "Scottie", "$500");
dogArray.push(dog1);

let dog2 = new Dog("spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charles-negative-space-insert-your-text-image-concept-movement-animal-rights_155003-33840.jpg", "Lady", "$450");
dogArray.push(dog2);

let dog3 = new Dog("long-hair.jpeg", "Dawn", "$600");
dogArray.push(dog3);

let dog4 = new Dog("head-sweater.jpeg", "Bingo", "$1000");
dogArray.push(dog4);

let dog5 = new Dog("fluffy.jpeg", "Fluffy", "$2000");
dogArray.push(dog5);

let dog6 = new Dog("dalmatian-1.jpeg", "Wolf", "$700");
dogArray.push(dog6);

let dog7 = new Dog("brown-spots.jpeg", "Simba", "$1200");
dogArray.push(dog7);

let dog8 = new Dog("beagles-puppies-looking-something_1150-18193.jpg", "Zama", "$200");
dogArray.push(dog8);

let dog9 = new Dog("hugger.jpg", "Beamer", "$900");
dogArray.push(dog9);

let dog10 = new Dog("front-view-beautiful-dog-with-copy-space.jpg", "Einstein", "$1000");
dogArray.push(dog10);

let dog11 = new Dog("tiny-black.jpeg", "Brownie", "$400");
dogArray.push(dog11);

let dog12 = new Dog("big-eyes.jpeg", "Charlie", "$600");
dogArray.push(dog12);
console.log(dogArray);

let gallery = document.querySelector('.row');
let grids = "";
dogArray.forEach(e => {
   grids += `
   <div class="col">
   <div class="card shadow  bg-dark bg-dark bg-dark bg-dark border-dark">
       <img src="assets/images/${e.image}" alt="" class=" card-img-top img-fluid ">
       <div class="card-body bg-dark">
           <h2 class="card-title text-center text-white">${e.name}</h2>
           <p class="card-text text-center text-white">${e.price}</p>
       </div> 
   </div>  
</div>`

    gallery.innerHTML = grids

})