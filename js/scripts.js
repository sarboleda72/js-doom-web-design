
// Mobile Menu
var menuAbrir = document.getElementById("btnHamAbrir");
var menuCer = document.getElementById("btnHamCer");
const slidingMenu = document.getElementById("sliding-header-menu-outer");

menuAbrir.addEventListener("click", function () {
  slidingMenu.style.right = '0px';
});

menuCer.addEventListener("click", function () {
  slidingMenu.style.right = '-320px';
});

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

//captura de About As
const btnMis = document.getElementById("mision");
const btnVis = document.getElementById("vision");
const btnVal = document.getElementById("values");
const cajTex = document.getElementById("box-text");

btnVal.addEventListener("click", function () {
  btnVal.style.backgroundColor = seletectedColor;
  btnMis.style.backgroundColor = unseletectedColor;
  btnVis.style.backgroundColor = unseletectedColor;
  cajTex.innerHTML = aboutUs.Values;
});

btnMis.addEventListener("click", function () {
  btnMis.style.backgroundColor = seletectedColor;
  btnVal.style.backgroundColor = unseletectedColor;
  btnVis.style.backgroundColor = unseletectedColor;
  cajTex.innerHTML = aboutUs.Mission;
});

btnVis.addEventListener("click", function () {
  btnVis.style.backgroundColor = seletectedColor;
  btnVal.style.backgroundColor = unseletectedColor;
  btnMis.style.backgroundColor = unseletectedColor;
  cajTex.innerHTML = aboutUs.Vision;
});
// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }

];

var tituloCarrusel = document.getElementById("service-title");
var textoCarrusel = document.getElementById("service-text");
var btnPrevioCarrusel = document.getElementById("service-previous");
var btnSiguienteCarrusel = document.getElementById("service-next");

btnPrevioCarrusel.addEventListener("click", function () {
  console.log(tituloCarrusel.textContent);
  if (tituloCarrusel.textContent == "Web design") {
    tituloCarrusel.textContent = ourServices[2].title;
    textoCarrusel.textContent = ourServices[2].text;
  } else if (tituloCarrusel.textContent == "Digital Marketing") {
    tituloCarrusel.textContent = ourServices[1].title;
    textoCarrusel.textContent = ourServices[1].text;
  } else if (tituloCarrusel.textContent == "Branding") {
    tituloCarrusel.textContent = ourServices[0].title;
    textoCarrusel.textContent = ourServices[0].text;
  }
}
)
btnSiguienteCarrusel.addEventListener("click", function () {
  console.log(tituloCarrusel.textContent);
  if (tituloCarrusel.textContent == "Web design") {
    tituloCarrusel.textContent = ourServices[1].title;
    textoCarrusel.textContent = ourServices[1].text;
  } else if (tituloCarrusel.textContent == "Digital Marketing") {
    tituloCarrusel.textContent = ourServices[0].title;
    textoCarrusel.textContent = ourServices[0].text;
  } else if (tituloCarrusel.textContent == "Branding") {
    tituloCarrusel.textContent = ourServices[2].title;
    textoCarrusel.textContent = ourServices[2].text;
  }
})


// Footer

var anoActual=document.getElementById("current_year");
var fecha= new Date();
var ano=fecha.getFullYear();
anoActual.textContent=ano;