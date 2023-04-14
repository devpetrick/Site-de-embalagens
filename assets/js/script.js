function enviado() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'E-mail enviado com Sucesso!',
    showConfirmButton: false,
    timer: 1500
  })
};

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage()
}, 5000)

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;

}

// BOTÂO "VER MAIS"

// rascunho

// pp = papel parana
// pb = plastico bolha
// fs = filme stretch
// eds = envelope de segurança
// sb = saco bolha
// epc = embalagem para colchao
// pk = papel kraft
// sp = saco preto
// fp = filme pead
// ea = etiquetas adesivas
// sci = saco com impressao
// szk = saco zip kraft
// ssp = saco stand pouch
// ada = almofada de ar

// fim rascunho

var boxes = document.getElementsByClassName("box__value");
var variables = ['pp', 'pb', 'fs', 'eds', 'sb', 'epc', 'pk', 'sp', 'fp', 'ea', 'sci', 'szk', 'ssp', 'ada'];
for (var i = 0; i < boxes.length; i++) {
  window[variables[i]] = boxes[i];
}

const elements = [
  "pp", "pb", "fs", "eds", "sb", "epc",
  "pk", "sp", "fp", "ea", "sci", "szk",
  "ssp", "ada"
];

function toggleOpacity(index) {
  const element = window[elements[index]];
  element.style.opacity = element.style.opacity === "1" ? "0" : "1";
}

for (let i = 0; i < elements.length; i++) {
  window[`mostrarvermais${i}`] = () => toggleOpacity(i);
  window[`ocutarvermais${i}`] = () => toggleOpacity(i);
}

// // FIM DO BOTÂO "VER MAIS"

