// 1: selecteer de button
let Likebutton = document.querySelector('button')
 
// 2: wacht op een klik
Likebutton.addEventListener('click', function() {

  
  // 3: maak de sectie geel, door een class toe te voegen aan die sectie..  
  document.querySelector('.buttonsLike').classList.toggle('liked')
})