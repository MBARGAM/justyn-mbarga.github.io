let fr = 5;
let en = 4;
let thai = 2;
let note = 5;
let point = document.createElement("span");
let inserer1 = document.getElementById("langue1");
let inserer2 = document.getElementById("langue2");
let inserer3 = document.getElementById("langue3");


for (let i = 0; i < note; i++) {

    let point1 = document.createElement("span");
    point1.style.border = "1px solid #6832a8";
    point1.style.width = "10px";
    point1.style.height = "10px";
    point1.style.background = "#6832a8";
    point1.style.borderRadius = "100%";
    point1.style.display = "inline-block";
    point1.style.marginRight = "5px";
    inserer1.appendChild(point1);
}
for (let i = 0; i < note; i++) {
    let point2 = document.createElement("span");
    point2.style.display = "inline-block";
    point2.style.marginRight = "5px";
    point2.style.borderRadius = "100%";
    point2.style.width = "10px ";
    point2.style.height = "10px";
    if (i < 4) {
        point2.style.background = "#6832a8";
        point2.style.border = "1px solid #6832a8";
    } else {
        point2.style.background = "grey";
        point2.style.border = "1px solid grey";
    }
    inserer2.appendChild(point2);


}
for (let i = 0; i < note; i++) {
    let point3 = document.createElement("span");
    point3.style.display = "inline-block";
    point3.style.marginRight = "5px";
    point3.style.border = "1px solid #6832a8";
    point3.style.borderRadius = "100%";
    point3.style.width = "10px ";
    point3.style.height = "10px";
    point3.style.background = "#6832a8";
    if (i < thai) {
        point3.style.background = "#6832a8";
        point3.style.border = "1px solid #6832a8";
    } else {
        point3.style.background = "grey";
        point3.style.border = "1px solid grey";
    }
    inserer3.appendChild(point3);
}