var z = document.getElementById("zmienna");
console.log("z=", z);
z.innerHTML = "Zmieniona zmienna";

var node = document.createElement("li");
var textNode = document.createTextNode("kolejny");
node.appendChild(textNode);
document.getElementById("listaMenu").appendChild(node);

var item = document.getElementById("listaMenu").children[0];
var clone = item.cloneNode(true);
document.getElementById("listaMenu").insertBefore(clone, item);



/*function myFunction() {
    document.querySelector(".klasanr1").style.backgroundColor = "red";
    document.querySelectorAll(".klasanr2").style.
}
*/