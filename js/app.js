/*creando variables*/

var area = document.getElementById('insert-linnks');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

/*creando eventos*/
boton.addEventListener('click', function(event) {
  if(area.value) {
    var li = document.createElement('li');
    var link = document.createElement('a');

    link.textContent = area.value;
    link.setAttribute('href', '#');

    li.appendChild(link);

    lista.appendChild(li);

    area.value = '';
  }
});
