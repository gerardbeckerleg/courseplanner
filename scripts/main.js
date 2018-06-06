var currentPoints = 0;
var targetPoints = 36;
document.getElementById("points").innerHTML = targetPoints;
document.getElementById("actualpoints").innerHTML = currentPoints;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  var source = ev.target.parentNode.getAttribute("data-card-type");
  ev.dataTransfer.setData("type", source);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var target = ev.target.getAttribute("data-card-type");
  var source = ev.dataTransfer.getData("type");
  if (target == "semester" && target != source) {
    currentPoints = currentPoints + 6;
  } else if (target == "course" && target != source) {
    currentPoints = currentPoints - 6;
  }
  calcpoints();
  calcsemester();
}
function calcpoints(){
    if (currentPoints >= targetPoints) {
        var element = document.getElementById("requiredpoints");
        element.classList.remove("is-danger");
        element.classList.add("is-success");
        element.innerHTML = "Pass";
      } else {
        var element = document.getElementById("requiredpoints");
        element.classList.remove("is-success");
        element.classList.add("is-danger");
        element.innerHTML = "Fail";
      }
      document.getElementById("actualpoints").innerHTML = currentPoints;
}
function calcsemester(){

    var semester1 = document.querySelector("[data-semester-1]").querySelectorAll("[data-course]").length;
    var semester2 = document.querySelector("[data-semester-2]").querySelectorAll("[data-course]").length;
    var semester3 = document.querySelector("[data-semester-3]").querySelectorAll("[data-course]").length;
    if(semester1 > 0 && semester2 > 0 && semester3 > 0){
        var element = document.getElementById("semester");
        element.classList.remove("is-danger");
        element.classList.add("is-success");
        element.innerHTML = "Pass";
    }
    else{
        var element = document.getElementById("semester");
        element.classList.remove("is-success");
        element.classList.add("is-danger");
        element.innerHTML = "Fail";
    }
}

var rad = document.myForm.studenttype;
    var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function() {
            
            if(this !== prev) {
                prev = this;
            }
            if(this.value=="domestic"){
                targetPoints = 36;
                document.getElementById("points").innerHTML = targetPoints;
            }else{
                targetPoints = 48;
                document.getElementById("points").innerHTML = targetPoints;
            }
            calcpoints();
        };
    }
