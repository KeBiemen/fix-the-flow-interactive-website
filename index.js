// // 1: selecteer de button
// const likeButton = document.querySelector('button')
 
// // 2: wacht op een klik
// likeButton.addEventListener('click', function() {
//   // Even checken of dit werkt..
  
//   // 3: maak de de geselecteerde knop kloppen, door een class toe te voegen aan die sectie..  
//   document.querySelector('.hart').classList.toggle('liked')
// })



/* selecteerd alle buttons met de class .leeg */
let likeButtons = document.querySelectorAll('button');

/* hij loopt door alle buttons heen */
likeButtons.forEach(function(buttons){
    /* als iemand op een van de like buttons clickt gebeurt er een function */
buttons.addEventListener("click", function(){
        /* function is togglen met voor alle classes met fill*/
    buttons.classList.toggle("liked")
    })
})
 


