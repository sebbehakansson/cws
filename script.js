// Welcome F22, vecka 39

let i = -1;
const unorderList = document.getElementById('unorder-list');
const buttonNext = document.getElementById('buttonNext');
const buttonPrevious = document.getElementById('buttonPrevious');
const addContry = document.getElementById('addContry');
const image = document.getElementById('image');


const world = {
    contry: [
       {
        Name: 'Sweden',
        Capital: 'Stockholme',
        Residents: '10350000',
        Language: 'Svenska',
        Religion: 'Kristendom',
        democracy: true,
        image: "./sweFlag.png",
       },
       {
        Name: 'Norge',
        Capital: 'Oslo',
        Residents: '5379000',
        Language: 'Norska',
        Religion: 'Kristendom',
        democracy: true,
        image: './norFlag.png'
       },
       {
        Name: 'Danmark',
        Capital: 'Köpenhamn', 
        Residents: '5831000',
        Language: 'Danska',
        Religion: 'Kristendom',
        democracy: true,
        image: './danFlag.png'
       },
       {
        Name: 'Finland',
        Capital: 'Helsingfors',
        Residents: '5531000',
        Language: 'Finska',
        Religion: 'Kristendom',
        democracy: true,
        image: './finFlag.png'
       },
       {
        Name: 'Island',
        Capital: 'Reykjavik',
        Residents: '366425',
        Language: 'Isländska',
        Religion: 'Kristendom',
        democracy: true,
        image: './islFlag.png'
       },
       
    ],
    addContry: function  innerHTML(newName, newCapital, newResidents, newLanguage, newReligion) {
        this.contry.push({
            name: newName,
            capital: newCapital,
            residents: newResidents,
            language: newLanguage,
            religion: newReligion,
        })
       }
    
}

buttonNext.addEventListener("click", function (event) {
    if (i === world.contry.length - 1) {
      i = -1;
    }
  
    unorderList.innerHTML = "";
    i++;
    for (const [key, value] of Object.entries(world.contry[i])) {
      if (key != "image") {
        let listElement = document.createElement("li");
        unorderList.append(listElement);
        listElement.innerText = [`${key}: ${value}`];
      } else if (key == "image") {
        image.src = world.contry[i].image;
      }
    }
   
  });
  
  buttonPrevious.addEventListener("click", function (event) {
    if (i <= 0) {
      i = world.contry.length;
    }
    i--;
    unorderList.innerHTML = "";
    for (const [key, value] of Object.entries(world.contry[i])) {
      if (key != "image") {
        let listElement = document.createElement("li");
        unorderList.append(listElement);
        listElement.innerText = [`${key}: ${value}`];
      } else if (key == "image") {
        image.src = world.contry[i].image;
      }
    }
  });



  


