window.onload = form;

function form(){
  const inputs = document.querySelectorAll(".input");
  /*const form = document.getElementById('form');
  const fullname = document.getElementById('fullname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const msg = document.getElementById('msg');*/

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
}

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("main-menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.querySelector( "#sun" ).onclick = () => {
	document.querySelector( "#retrobg" ).classList.toggle( "shutdown" );
};