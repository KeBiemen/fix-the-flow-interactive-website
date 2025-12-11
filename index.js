// 1: selecteer de button
let likebutton = document.querySelector('button')
 
// 2: wacht op een klik
likebutton.addEventListener('click', function() {
  // Even checken of dit werkt..
  
  // 3: maak de sectie geel, door een class toe te voegen aan die sectie..  
  document.querySelector('.hart').classList.toggle('liked')
})