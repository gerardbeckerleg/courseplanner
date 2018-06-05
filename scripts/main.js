var currentPoints = 30;

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
    console.log(ev.dataTransfer);
    var target = ev.target.getAttribute("data-card-type");
    console.log(target);
        var source = ev.dataTransfer.getData("type");
        console.log(source);
        if (target == "semester" && target != source) {
        currentPoints = currentPoints - 10;
    } else if(target=="module") {
        currentPoints = currentPoints + 10;
    }
    if (currentPoints==0){
        var element = document.getElementById("points");
    element.classList.remove("is-danger");
    element.classList.add("is-success");
    element.innerHTML = "Pass"
    } else {
        var element = document.getElementById("points");
        element.classList.remove("is-success");
        element.classList.add("is-danger");
        element.innerHTML = "Fail"
    }
    console.log(currentPoints);
}