let dogArray = [
{ 
    image:"tiny-white.jpg", 
    name:"Scottie", 
    price:"$500"
},
{
    image:"spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charles-negative-space-insert-your-text-image-concept-movement-animal-rights_155003-33840.jpg", 
    name:"Lady", 
    price:"$450"
},
{
    image:"long-hair.jpeg", 
    name:"Dawn", 
    price:"$600"
},
{
    image:"head-sweater.jpeg", 
    name:"Bingo", 
    price:"$1000"
},
{
    image:"fluffy.jpeg", 
    name:"Fluffy", 
    price:"$2000"
},
{
    image:"dalmatian-1.jpeg", 
    name:"Wolf", 
    price:"$700"
},
{
    image:"brown-spots.jpeg", 
    name:"Simba", 
    price:"$1200"
},
{
    image:"beagles-puppies-looking-something_1150-18193.jpg", 
    name:"Zama", 
    price:"$200"
},
{
    image:"hugger.jpg", 
    name:"Beamer", 
    price:"$900"
},
{
    image:"front-view-beautiful-dog-with-copy-space.jpg", 
    name:"Einstein", 
    price:"$1000"
},
{
    image:"tiny-black.jpeg", 
    name:"Brownie", 
    price:"$400"
},
{
    image:"big-eyes.jpeg",
     name:"Charlie", 
     price:"$600"
},]
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