console.log('%c HI', 'color: firebrick')
// let image = document.createElement('li')
//let imageAdd = document.getElementById('dog-image-container')

function addImages(info){
  info.message.forEach(element => {
    let img = document.createElement('img')
    img.src = element
    document.getElementById('dog-image-container').append(img)
  })
}


function animalImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(data => addImages(data))
}

function dogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then (resp => resp.json())
  .then (data => {
    Object.keys(data.message).forEach(element => {
      let line = document.createElement('li')
      line.textContent = element
      document.getElementById('dog-breeds').append(line)
      line.addEventListener('click', () => line.style.color = 'blue')
    })
  })
}

const dropdown = document.getElementById('breed-dropdown')
const breedsContainer = document.querySelector('#dog-breeds')

dropdown.addEventListener('change', event => {
  const breedLetter = event.target.value
  const breedLis = breedsContainer.querySelectorAll('li')
  breedLis.forEach(li => {
    if (li.textContent[0] === breedLetter) {
      li.style.display = ''
    } else {
      li.style.display = 'none'
    }
  })
})

animalImages()
dogBreeds()