var students = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

function nombreArchivo(numero){
  return "assets/img/students/" + (numero+1) + ".png"
}
function crearCoder(a){
    var div = document.createElement("div");
    div.setAttribute("class","div-img");
    var imagen = document.createElement("img");
    imagen.setAttribute("class","img");
    imagen.setAttribute("alt",a);
    var indice = students.indexOf(a);
    imagen.setAttribute("src",nombreArchivo(indice));
    var texto = document.createElement("span");
    texto.setAttribute("class","text");
    texto.innerHTML = students[indice];

    div.appendChild(imagen);
    div.appendChild(texto);
    return div;
}

window.addEventListener("load",function(){
  var coder = [];
  for(var i = 0; i<students.length; i++){
    coder.push(document.getElementById("promocion").appendChild(crearCoder(students[i])));
  }
  return coder;
});
