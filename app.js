var temporizador;
function animacionMainTitulo(){
  $(".main-titulo").animate({ color: '#00b0b3' },
  {
    duration: 1000,
    complete: function() {
        $(this).css("color","#DCFF0E")
         animacionMainTitulo();
      }
  }
 )
}
//AgregarFilas
function AgregarFilas(){
  for (var i = 1; i <= 7; i++) {
    var elemento = $(".col-"+i.toString());
    for (var j = 1; j <= 7; j++) {
      var divRow = "<div class='row-"+j+"'></div>";
      $(elemento).append(divRow);
    }
  }
}
  //random
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
//agregarDulcesEspaciosVacios

function agregarDulcesEspaciosVacios(){
  for (var i = 1; i <= 7; i++) {
    var columna = $(".col-"+i.toString());
    var col = columna.children('div');
    if (columna.children('div').length == 7) {
      for (var j = 0; j <= col.length; j++) {
        var filaColumna = col[j];
        var elemento = $(filaColumna);
        if (elemento.children('img').length == 0) {
          var numeroImagen = getRandomInt(1,4);
          var idt ="id = '" + i.toString()+j.toString()+numeroImagen.toString()+"' " ;
          var divDulce = "<img "+ idt + "class= 'elemento "+numeroImagen+"' src='image/"+numeroImagen.toString()+".png'>";
          $(filaColumna).append(divDulce);
        }
      }

    }
  }
}

function emparejamientoVertical(){
  for (var i = 1; i <= 7; i++) {
    var elemento = $(".col-"+i.toString());
    var columnaDulces = elemento.children('div');
    var evalua1 = 0;
    var valida1 = false;
    var evalua2 = 0;
    var valida2 = false;
    var evalua3 = 0;
    var valida3 = false;
    var evalua4 = 0;
    var valida4 = false;

    //arrays
    var array1 = new Array();
    var array2 = new Array();
    var array3 = new Array();
    var array4 = new Array();

    //evaluacion1
    for (var j = 0; j < columnaDulces.length; j++) {
      var dulce = $(columnaDulces[j]).children('img');
      var clase = dulce[0].className;
      if (clase.includes("elemento 1")) {
        evalua1++;
        valida1 = true;
        array1.push($(columnaDulces[j]).children('img')[0].id);;
      }
      else
      {
        if(evalua1<3){
          evalua1 = 0;
          valida1 = false;
          array1 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida1 && evalua1>=3){
      actualizaPuntuacion(array1.length);
      array1.forEach(function(item){
        $("#"+item).animate({ width: "-=60", height: "-=20"},
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua1 = 0;
                valida1 = false;
                array1 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua1.toString());
    }
    //evaluacion2
    for (var j = 0; j < columnaDulces.length; j++) {
      var dulce = $(columnaDulces[j]).children('img');
      var clase = dulce[0].className;
      if (clase.includes("elemento 2")) {
        evalua2++;
        valida2 = true;
        array2.push($(columnaDulces[j]).children('img')[0].id);;
      }
      else
      {
        if(evalua2<3){
          evalua2 = 0;
          valida2 = false;
          array2 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida2 && evalua2>=3){
      array2.forEach(function(item){
        actualizaPuntuacion(array2.length);
        $("#"+item).animate({ width: "-=60", height: "-=20"},
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua2 = 0;
                valida2 = false;
                array2 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua2.toString());
    }
    //evaluacion3
    for (var j = 0; j < columnaDulces.length; j++) {
      var dulce = $(columnaDulces[j]).children('img');
      var clase = dulce[0].className;
      if (clase.includes("elemento 3")) {
        evalua3++;
        valida3 = true;
        array3.push($(columnaDulces[j]).children('img')[0].id);;
      }
      else
      {
        if(evalua3<3){
          evalua3 = 0;
          valida3 = false;
          array3 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida3 && evalua3>=3){
      actualizaPuntuacion(array3.length);
      array3.forEach(function(item){
        $("#"+item).animate({ width: "-=60", height: "-=20" },
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua3 = 0;
                valida3 = false;
                array3 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua3.toString());
    }
    //evaluacion4
    for (var j = 0; j < columnaDulces.length; j++) {
      var dulce = $(columnaDulces[j]).children('img');
      var clase = dulce[0].className;
      if (clase.includes("elemento 4")) {
        evalua4++;
        valida4 = true;
        array4.push($(columnaDulces[j]).children('img')[0].id);
      }
      else
      {
        if(evalua4<3){
          evalua4 = 0;
          valida4 = false;
          array4 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida4 && evalua4>=3){
      actualizaPuntuacion(array4.length);
      array4.forEach(function(item){
        $("#"+item).animate({width: "-=60", height: "-=20"},
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua4 = 0;
                valida4 = false;
                array4 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua4.toString());
    }
  }
  //llenarTablero();
  //emparejamiento();
}

function emparejamientoHorizontal(){
  for (var i = 1; i <= 7; i++) {
    var elemento = $(".row-"+i.toString());
    var columnaDulces = elemento.children('img');
    var evalua1 = 0;
    var valida1 = false;
    var evalua2 = 0;
    var valida2 = false;
    var evalua3 = 0;
    var valida3 = false;
    var evalua4 = 0;
    var valida4 = false;

    //arrays
    var array1 = new Array();
    var array2 = new Array();
    var array3 = new Array();
    var array4 = new Array();

    //evaluacion1
    for (var j = 0; j < columnaDulces.length; j++) {
      var clase = columnaDulces[j].className;
      if (clase.includes("elemento 1")) {
        evalua1++;
        valida1 = true;
        array1.push(columnaDulces[j].id);
      }
      else
      {
        if(evalua1<3){
          evalua1 = 0;
          valida1 = false;
          array1 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida1 && evalua1>=3){
      actualizaPuntuacion(array1.length);
      array1.forEach(function(item){
        $("#"+item).animate({ width: "-=60", height: "-=20"},
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua1 = 0;
                valida1 = false;
                array1 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua1.toString());
    }
    //evaluacion2
    for (var j = 0; j < columnaDulces.length; j++) {
      var clase = columnaDulces[j].className;
      if (clase.includes("elemento 2")) {
        evalua2++;
        valida2 = true;
        array2.push(columnaDulces[j].id);
      }
      else
      {
        if(evalua2<3){
          evalua2 = 0;
          valida2 = false;
          array2 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida2 && evalua2>=3){
      actualizaPuntuacion(array2.length);
      array2.forEach(function(item){
        $("#"+item).animate({ width: "-=60", height: "-=20"},
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua2 = 0;
                valida2 = false;
                array2 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua2.toString());
    }
    //evaluacion3
    for (var j = 0; j < columnaDulces.length; j++) {
      var clase = columnaDulces[j].className;
      if (clase.includes("elemento 3")) {
        evalua3++;
        valida3 = true;
        array3.push(columnaDulces[j].id);
      }
      else
      {
        if(evalua3<3){
          evalua3 = 0;
          valida3 = false;
          array3 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida3 && evalua3>=3){
      actualizaPuntuacion(array3.length);
      array3.forEach(function(item){
        $("#"+item).animate({ width: "-=60", height: "-=20" },
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua3 = 0;
                valida3 = false;
                array3 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua3.toString());
    }
    //evaluacion4
    for (var j = 0; j < columnaDulces.length; j++) {
      var clase = columnaDulces[j].className;
      if (clase.includes("elemento 4")) {
        evalua4++;
        valida4 = true;
        array4.push(columnaDulces[j].id);
      }
      else
      {
        if(evalua4<3){
          evalua4 = 0;
          valida4 = false;
          array4 = new Array();
        }
        else {
          break;
        }
      }
    }
    if(valida4 && evalua4>=3){
      actualizaPuntuacion(array4.length);
      array4.forEach(function(item){
        $("#"+item).animate({width: "-=60", height: "-=20"},
          {
            duration: 1000,
            complete: function() {
                $("#"+item).remove();
                evalua4 = 0;
                valida4 = false;
                array4 = new Array();
                // llenarTablero();
              }
          }
        )
        //$("#"+item).remove();
      })
      //alert("emparejamiento en Col: " + i.toString() + "numero: " + evalua4.toString());
    }
  }
  //llenarTablero();
  //emparejamiento();
  bajarDulces();
}

function bajarDulces() {
  //posiciones donde hay imagen
  for (var i = 1; i <= 7; i++) {
    var listaElemetosConImagen  = new Array();
    var columna = $(".col-"+i.toString());
    var col = columna.children('div');
    if (columna.children('div').length == 7) {
      //elementos con imagen
      for (var j = col.length-1; j >= 0 ; j--) {
        var filaColumna = col[j];
        var elemento = $(filaColumna);
        if (elemento.children('img').length != 0) {
          listaElemetosConImagen.push(j)
        }
      }
      //bajar elementos
      if (listaElemetosConImagen.length != 7 ) {
        var a = 0;
        for (var j = col.length-1; j >= 0 ; j--) {
            var celdaSinImagen = col[j];
            var elementoConImagen = listaElemetosConImagen[a]
            if(elementoConImagen != undefined && j != elementoConImagen){
              var elemento = $(celdaSinImagen);
              var elementoRemplaza = $(col[listaElemetosConImagen[a]]);
              var img = elementoRemplaza.children('img')[0];
              elemento.append(img);
              $(elementoRemplaza.children('img')[0]).remove();
          }
          a++;
        }
      }
    }
  }
  agregarDulcesEspaciosVacios();

}

function addCandyEvents() {
  $('img').draggable({
  containment: '.panel-tablero',
  droppable: 'img',
  revert: true,
  revertDuration: 500,
  grid: [100, 100],
  zIndex: 10,
  drag: constrainCandyMovement
  });
  $('img').droppable({
    drop: swapCandy
  });
}

function swapCandy(event, candyDrag) {
var candyDrag = $(candyDrag.draggable);
var dragSrc = candyDrag.attr('src');
var dragClas = candyDrag.attr('class')
var candyDrop = $(this);
var dropSrc = candyDrop.attr('src');
var dropClas = candyDrop.attr('class');
candyDrag.attr('src', dropSrc);
candyDrag.attr('class', dropClas);
candyDrop.attr('src', dragSrc);
candyDrop.attr('class', dragClas);

setTimeout(function () {
// if ($('img.delete').length === 0) {
// candyDrag.attr('src', dragSrc);
// candyDrop.attr('src', dropSrc);
// } else {
actualizarMovimientos();
// }
}, 500);
//emparejamientoHorizontal();
//emparejamientoVertical();
}

function constrainCandyMovement(event, candyDrag) {

  candyDrag.position.top = Math.min(100, candyDrag.position.top);
  candyDrag.position.bottom = Math.min(100, candyDrag.position.bottom);
  candyDrag.position.left = Math.min(100, candyDrag.position.left);
  candyDrag.position.right = Math.min(100, candyDrag.position.right);
  if(candyDrag.position.top < -100 || candyDrag.position.left < -100)
  {
    candyDrag.position.top = 0;
    candyDrag.position.bottom = 0;
    candyDrag.position.left = 0;
    candyDrag.position.right = 0;
  }

  if(candyDrag.position.top != 0 && candyDrag.position.left != 0)
  {
    candyDrag.position.top = 0;
    candyDrag.position.bottom = 0;
    candyDrag.position.left = 0;
    candyDrag.position.right = 0;
  }

}


  $(".btn-reinicio").on("click", function(){
    var nombre =$(".btn-reinicio").text();
    if (nombre=="Iniciar") {
      $(".btn-reinicio").text("Reiniciar");
      clearTimeout(temporizador);
      AgregarFilas();
      min =0;
      seg =0;
      updateReloj();
      agregarDulcesEspaciosVacios();
    }
    else { clearTimeout(temporizador);
      $(".btn-reinicio").text("Iniciar");
        location.reload(true);
    }

});
animacionMainTitulo();
$(document).mousemove(function(event){
   bajarDulces();
   emparejamientoVertical();
   emparejamientoHorizontal();
   addCandyEvents();
 });


 function actualizaPuntuacion(eliminados)
 {
   var puntosActuales = Number($('#score-text').text());
   var nuevosPuntos = puntosActuales += eliminados;
   $('#score-text').text(nuevosPuntos);
 }

 function FinalizarJuego() {
  clearTimeout(temporizador);
  $(".panel-tablero").hide("slow");
  $(".panel-score").animate(
    {
      width: "+=50"
    }, 1000
  );
}

function actualizarMovimientos()
{
  var actualValue = Number($('#movimientos-text').text());
  var result = actualValue += 1;
  $('#movimientos-text').text(result);
}
