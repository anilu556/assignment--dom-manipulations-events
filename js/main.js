// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */
document.querySelector(".btn-toggle-menu").addEventListener('click',function(){


var menu = document.querySelector(".answer-box nav")
var btn = document.querySelector(".btn-toggle-menu")


if (  menu.className === "nav-menu"){
  btn.innerHTML = "Show Me"
  menu.classList.remove("nav-menu")
  menu.classList.add("nav-menu-hidden")
} else {
  btn.innerHTML = "Hide Me"
  menu.classList.remove("nav-menu-hidden")
  menu.classList.add("nav-menu")
}
});

/* TASK 2 -- Select/Deslect an Icon */
document.querySelectorAll('.option').forEach(function(div){
  div.addEventListener('click',function(evt){

    if (evt.currentTarget.className === 'option'){
      evt.currentTarget.classList.add('selected')
    } else {
      evt.currentTarget.classList.remove('selected')
    }
  })
})

/* TASK 3 -- Increase total number*/
document.querySelectorAll('.point').forEach(function(btn){
  btn.addEventListener('click',function(){

    var total = document.querySelector('.total-points');
    total.textContent = parseInt(total.textContent) + parseInt(btn.textContent)

  })

})

/* TASK 4 (Adventure Mode)-- Move Item List to List */
document.querySelectorAll('.individual').forEach(function (element){
  element.addEventListener('click', function(){
    if (element.parentNode.className === "good-standing-list") {
      document.querySelector('.probation-list').appendChild(element)
      }
    else if (element.parentNode.className ===  "probation-list") {
      document.querySelector('.good-standing-list').appendChild(element)
    }
  })
})
/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */

document.querySelectorAll('span').forEach(function (box){
  box.addEventListener('click', function(e){
    var color = e.target.attributes.class.textContent;
    document.querySelector('.msg').attributes.class.textContent = "msg " + color
  })
})
