fetch('https://api.thecatapi.com/v1/breeds')

.then(breeds => {
  return breeds.json();
})

.then(breeds => {
    for(i = 0; i < breeds.length; i++) {
        const option = document.createElement('option');
        option.value = breeds[i].id;
        option.innerHTML += breeds[i].name;
        document.querySelector('#cat-breeds').appendChild(option);
    }
});


let catbreed;

function catBreed(select){
  catbreed = select.options[select.selectedIndex].value;
};

function catNum(ele){
  if (event.key === 'Enter') {
    setCats(ele.value, catbreed);
  };
};


function setCats(numOfCats, catbreed){

  const cats = document.querySelector(".cats");

  while (cats.firstChild) {
    cats.removeChild(cats.firstChild);
  }

  let url = 'https://api.thecatapi.com/v1/images/search?breed_id=' + catbreed;

  for(i = 0; i < numOfCats; i++) {
    fetch(url, {
       mode: 'cors',           
       header: {
        'x-api-key': 'e33605bd-fd31-477e-b931-40fa06db4301'
      }
    })


    .then(kitten => {
      return kitten.json();
    })
    .then(kitten => {
      return kitten[0];
    })
    .then(kitten => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = kitten.url;
      if (kitten.width > window.innerWidth - 400){
        img.width = window.innerWidth - 400;
      };
      li.appendChild(img);
      cats.appendChild(li);
      cats.lastChild.style.marginBottom = "5%";
    });

  }

};

