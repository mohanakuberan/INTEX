    var circle = document.getelElementById("circle");
    var upbtn = document.getelElementById("upbtn");
    var downbtn = document.getelElementById("downbtn");
    var rotatevalue = circle.style.transform;
    var rotatesum;

    upbtn.onclick = function () {
        rotatesum = rotatevalue +"rotate(-90deg)";
        circle.style.transform =rotatesum;
        rotatevalue=rotatesum;
    }


    downbtn.onclick = function () {
        rotatesum = rotatevalue +"rotate(90deg)";
        circle.style.transform =rotatesum;
        rotatevalue=rotatesum;
    }
