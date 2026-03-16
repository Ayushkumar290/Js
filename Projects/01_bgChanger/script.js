const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");


btns.forEach(function (btn) {
  btn.style.color = "black"
  btn.addEventListener("click", function(e){
    let color = e.target.id;
    btn.style.color = 'black';
    console.log(color)
    switch (color) {
      case "red":
      case "blue":
      case "green":
      case "yellow":
        body.style.backgroundColor = color;  
        break;

      default:
        body.style.backgroundColor = "white";
        break;
    }
  });
});
