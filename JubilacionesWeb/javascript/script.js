document.getElementById("lista-trabajadores").style.display = 'none';
document.getElementById("informacion-trabajos").style.display = 'none';

document.getElementById("trabajador1").style.display = 'none';
document.getElementById("trabajador2").style.display = 'none';
document.getElementById("trabajador3").style.display = 'none';
document.getElementById("trabajador4").style.display = 'none';
document.getElementById("trabajador5").style.display = 'none';
document.getElementById("trabajador6").style.display = 'none';
document.getElementById("trabajador7").style.display = 'none';
document.getElementById("trabajador8").style.display = 'none';
document.getElementById("trabajador9").style.display = 'none';
document.getElementById("trabajador10").style.display = 'none';
document.getElementById("trabajador11").style.display = 'none';
document.getElementById("trabajador12").style.display = 'none';

document.getElementById("trabajo1").style.display = 'none';
document.getElementById("trabajo2").style.display = 'none';
document.getElementById("trabajo3").style.display = 'none';
document.getElementById("trabajo4").style.display = 'none';
document.getElementById("trabajo5").style.display = 'none';
document.getElementById("trabajo6").style.display = 'none';
document.getElementById("trabajo7").style.display = 'none';
document.getElementById("trabajo8").style.display = 'none';
document.getElementById("trabajo9").style.display = 'none';
document.getElementById("trabajo10").style.display = 'none';
document.getElementById("trabajo11").style.display = 'none';
document.getElementById("trabajo12").style.display = 'none';

document.getElementById("no-result").style.display = 'none';

function busqueda() {
    var trabajo = document.getElementById("input").value
    document.getElementById("informacion-trabajos").style.display = 'none';
if (trabajo.toLowerCase() == "programador") {
    document.getElementById("trabajador1").style.display = 'block';
    document.getElementById("trabajador2").style.display = 'block';
    document.getElementById("trabajador3").style.display = 'none';
    document.getElementById("trabajador4").style.display = 'none';
    document.getElementById("trabajador5").style.display = 'none';
    document.getElementById("trabajador6").style.display = 'none';
    document.getElementById("trabajador7").style.display = 'none';
    document.getElementById("trabajador8").style.display = 'none';
    document.getElementById("trabajador9").style.display = 'none';
    document.getElementById("trabajador10").style.display = 'none';
    document.getElementById("trabajador11").style.display = 'none';
    document.getElementById("trabajador12").style.display = 'none';
    document.getElementById("lista-trabajadores").style.display = 'block';
    document.getElementById("buscar").style.display = 'none';
    document.getElementById("no-result").style.display = 'none';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
}
else if (trabajo.toLowerCase() == "medico") {
    document.getElementById("trabajador3").style.display = 'block';
    document.getElementById("trabajador4").style.display = 'block';
    document.getElementById("trabajador1").style.display = 'none';
    document.getElementById("trabajador2").style.display = 'none';
    document.getElementById("trabajador5").style.display = 'none';
    document.getElementById("trabajador6").style.display = 'none';
    document.getElementById("trabajador7").style.display = 'none';
    document.getElementById("trabajador8").style.display = 'none';
    document.getElementById("trabajador9").style.display = 'none';
    document.getElementById("trabajador10").style.display = 'none';
    document.getElementById("trabajador11").style.display = 'none';
    document.getElementById("trabajador12").style.display = 'none';
    document.getElementById("lista-trabajadores").style.display = 'block';
    document.getElementById("buscar").style.display = 'none';
    document.getElementById("no-result").style.display = 'none';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
}
else if (trabajo.toLowerCase() == "docente" || trabajo.toLowerCase() == "maestro" || trabajo.toLowerCase() == "profesor") {
    document.getElementById("trabajador5").style.display = 'block';
    document.getElementById("trabajador6").style.display = 'block';
    document.getElementById("trabajador3").style.display = 'none';
    document.getElementById("trabajador4").style.display = 'none';
    document.getElementById("trabajador1").style.display = 'none';
    document.getElementById("trabajador2").style.display = 'none';
    document.getElementById("trabajador7").style.display = 'none';
    document.getElementById("trabajador8").style.display = 'none';
    document.getElementById("trabajador9").style.display = 'none';
    document.getElementById("trabajador10").style.display = 'none';
    document.getElementById("trabajador11").style.display = 'none';
    document.getElementById("trabajador12").style.display = 'none';
    document.getElementById("lista-trabajadores").style.display = 'block';
    document.getElementById("buscar").style.display = 'none';
    document.getElementById("no-result").style.display = 'none';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
}
else if (trabajo.toLowerCase() == "abogado") {
    document.getElementById("trabajador7").style.display = 'block';
    document.getElementById("trabajador8").style.display = 'block';
    document.getElementById("trabajador3").style.display = 'none';
    document.getElementById("trabajador4").style.display = 'none';
    document.getElementById("trabajador5").style.display = 'none';
    document.getElementById("trabajador6").style.display = 'none';
    document.getElementById("trabajador1").style.display = 'none';
    document.getElementById("trabajador2").style.display = 'none';
    document.getElementById("trabajador9").style.display = 'none';
    document.getElementById("trabajador10").style.display = 'none';
    document.getElementById("trabajador11").style.display = 'none';
    document.getElementById("trabajador12").style.display = 'none';
    document.getElementById("lista-trabajadores").style.display = 'block';
    document.getElementById("buscar").style.display = 'none';
    document.getElementById("no-result").style.display = 'none';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
}
else if (trabajo.toLowerCase() == "panadero"){
    document.getElementById("trabajador9").style.display = 'block';
    document.getElementById("trabajador10").style.display = 'block';
    document.getElementById("trabajador3").style.display = 'none';
    document.getElementById("trabajador4").style.display = 'none';
    document.getElementById("trabajador5").style.display = 'none';
    document.getElementById("trabajador6").style.display = 'none';
    document.getElementById("trabajador7").style.display = 'none';
    document.getElementById("trabajador8").style.display = 'none';
    document.getElementById("trabajador1").style.display = 'none';
    document.getElementById("trabajador2").style.display = 'none';
    document.getElementById("trabajador11").style.display = 'none';
    document.getElementById("trabajador12").style.display = 'none';
    document.getElementById("lista-trabajadores").style.display = 'block';
    document.getElementById("buscar").style.display = 'none';
    document.getElementById("no-result").style.display = 'none';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
}
else if (trabajo.toLowerCase() == "colectivero"){
    document.getElementById("trabajador11").style.display = 'block';
    document.getElementById("trabajador12").style.display = 'block';
    document.getElementById("trabajador3").style.display = 'none';
    document.getElementById("trabajador4").style.display = 'none';
    document.getElementById("trabajador5").style.display = 'none';
    document.getElementById("trabajador6").style.display = 'none';
    document.getElementById("trabajador7").style.display = 'none';
    document.getElementById("trabajador8").style.display = 'none';
    document.getElementById("trabajador9").style.display = 'none';
    document.getElementById("trabajador10").style.display = 'none';
    document.getElementById("trabajador1").style.display = 'none';
    document.getElementById("trabajador2").style.display = 'none';
    document.getElementById("lista-trabajadores").style.display = 'block';
    document.getElementById("buscar").style.display = 'none';
    document.getElementById("no-result").style.display = 'none';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
}
else {
    document.getElementById("no-result").style.display = 'block';
    document.getElementById("lista-trabajadores").style.display = 'none';
    document.getElementById("informacion-trabajos").style.display = 'none';
    document.getElementById("buscar").style.display = 'none';
}
}

document.getElementById("trabajador1").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'block';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador2").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo2").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador3").addEventListener('click', () => {
    document.getElementById("trabajo3").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
  document.getElementById("trabajador4").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo4").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador5").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo5").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador6").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo6").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
  document.getElementById("trabajador7").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo7").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador8").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo8").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador9").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo9").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
  document.getElementById("trabajador10").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo10").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador11").addEventListener('click', () => {
    document.getElementById("trabajo11").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo12").style.display = 'none';
  });
document.getElementById("trabajador12").addEventListener('click', () => {
    document.getElementById("informacion-trabajos").style.display = 'block';
    document.getElementById("trabajo12").style.display = 'block';
    document.getElementById("trabajo1").style.display = 'none';
    document.getElementById("trabajo2").style.display = 'none';
    document.getElementById("trabajo3").style.display = 'none';
    document.getElementById("trabajo4").style.display = 'none';
    document.getElementById("trabajo5").style.display = 'none';
    document.getElementById("trabajo6").style.display = 'none';
    document.getElementById("trabajo7").style.display = 'none';
    document.getElementById("trabajo8").style.display = 'none';
    document.getElementById("trabajo9").style.display = 'none';
    document.getElementById("trabajo10").style.display = 'none';
    document.getElementById("trabajo11").style.display = 'none';
  });