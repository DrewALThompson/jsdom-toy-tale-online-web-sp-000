let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetchToys(){
    fetch('http://localhost:3000/toys')
    .then(res => res.json)
    .then(json => createToy(json));
    
    function createToy(json){
      const toyBox = document.getElementById('toy-collection');
      
      json.forEach(toy => {
        let newToy = document.createElement('div');
        newToy.className = 'card';
        toyName(toy, newToy);
        toyPhoto(toy, newToy);
        totalLikes(toy, newToy);
        likeBtn(toy, newToy);
        toyBox.appendChild(newToy);
      });
      
      function toyName(toy, newToy){
        let name = document.createElement('h2');
        name.innerText = toy.name;
        card.appendChild(newToy);
      }
      function toyPhoto(toy, newToy){
        let image = document.createElement('img');
        image.src = toy.image;
        image.className = 'toy-avatar';
        newToy.appendChild(image);
      }
      function totalLikes(toy, newToy){
        let likes = document.createElement('p');
        likes.innerText
      }
      function likeBtn(toy, newToy){}
    }
}
  
  
