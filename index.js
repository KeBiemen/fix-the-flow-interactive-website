// 1: selecteer de button
let likebutton = document.querySelector('button')
let likeButton = document.querySelector('button')
 
// 2: wacht op een klik
likebutton.addEventListener('click', function() {
likeButton.addEventListener('click', function() {
  // Even checken of dit werkt..
  
  // 3: maak de sectie geel, door een class toe te voegen aan die sectie..  
  // 3: maak de de geselecteerde knop kloppen, door een class toe te voegen aan die sectie..  
  document.querySelector('.hart').classList.toggle('liked')
})