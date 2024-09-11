var peso_ling = 0;
var peso_mat = 0;
var peso_ch = 0;
var peso_cn = 0;
var peso_red = 0;
function calcular(sem_peso) {
  var materia = document.getElementById("select-matéria").value;
  if (sem_peso == 0) {
    materia = 0;
  }
  var acertos_ling = document.getElementById("acertos_ling").value;
  var acertos_mat = document.getElementById("acertos_mat").value;
  var acertos_ch = document.getElementById("acertos_ch").value;
  var acertos_cn = document.getElementById("acertos_cn").value;
  var redacao = document.getElementById("redacao").value;
  if (materia == 1) {
    peso_ling = 1;
    peso_mat = 1;
    peso_ch = 2;
    peso_cn = 1;
    peso_red = 2;
  } else if (materia == 2) {
    peso_ling = 2;
    peso_mat = 2;
    peso_ch = 1;
    peso_cn = 1;
    peso_red = 2;
  } else if (materia == 0) {
    peso_ling = 1;
    peso_mat = 1;
    peso_ch = 1;
    peso_cn = 1;
    peso_red = 1;
  }
  var nota_ling =
    (500 + (100 * (acertos_ling * 2 - 15.8193)) / 5.0174) * peso_ling; // EP = 500 + 100 (PONTOS NA MATÉRIA) - MÉDIA TOTAL)/DESVIO PADRÃO
  var nota_mat = (500 + (100 * (acertos_mat * 2 - 9.3289)) / 5.2204) * peso_mat;
  var nota_cn = (500 + (100 * (acertos_cn * 2 - 12.0207)) / 5.1675) * peso_cn;
  var nota_ch = (500 + (100 * (acertos_ch * 2 - 12.8991)) / 4.8384) * peso_ch;
  var nota_red = redacao * peso_red;
  var nota_final =
    (nota_ling + nota_mat + nota_ch + nota_cn + nota_red) /
    (peso_ling + peso_mat + peso_cn + peso_ch + peso_red);
  var pesos =
    "<span>Peso de Linguagens: </span><span>" +
    peso_ling +
    "</span><span>|  Peso de Matemática: </span><span>" +
    peso_mat +
    "</span><br><span>Peso de Ciências Humanas: </span><span style='display:inline'>" +
    peso_ch +
    "</span><span>|  Peso de Ciências da Natureza: </span><span> " +
    peso_cn +
    "</span><br><span>Peso de Redação: </span><span>" +
    peso_red +
    "</span><br><br>";
  var nota =
    "<br><h2>Notas com pesos:</h2><span>Nota de Linguagens: </span><span>" +
    nota_ling.toFixed(2) +
    "</span><br><span>Nota de Matemática: </span><span>" +
    nota_mat.toFixed(2) +
    "</span><br><span>Nota de Ciências Humanas: </span><span>" +
    nota_ch.toFixed(2) +
    "</span><br><span>Nota de Ciências da Natureza: </span><span> " +
    nota_cn.toFixed(2) +
    "</span><br><span>Nota de Redação: </span><span>" +
    nota_red.toFixed(2) +
    "</span><br><span>Nota Final: </span><span>" +
    nota_final.toFixed(2) +
    "</span><br><br>";
  document.getElementById("container").remove();
  document.getElementById("pesos").innerHTML = pesos;
  document.getElementById("nota").innerHTML = nota;
  var btn_reiniciar = document.createElement("button");
  btn_reiniciar.textContent = "Reiniciar";
  btn_reiniciar.id = "btn-reiniciar";
  btn_reiniciar.className = "btn";
  btn_reiniciar.onclick = function () {
    window.location.reload();
    };
    document.getElementById("botoes").appendChild(btn_reiniciar);
  var btn_sem_peso = document.createElement("button");
  btn_sem_peso.textContent = "Calcular sem pesos";
  btn_sem_peso.id = "btn_sem_peso";
  btn_sem_peso.className = "btn";
    btn_sem_peso.onclick = function calcularsempeso() { 
          var nota =
            "<br><h2>Notas com pesos:</h2><span>Nota de Linguagens: </span><span>" +
            (nota_ling / peso_ling).toFixed(2) +
            "</span><br><span>Nota de Matemática: </span><span>" +
            (nota_mat / peso_mat).toFixed(2) +
            "</span><br><span>Nota de Ciências Humanas: </span><span>" +
            (nota_ch / peso_ch).toFixed(2) +
            "</span><br><span>Nota de Ciências da Natureza: </span><span> " +
            (nota_cn / peso_cn).toFixed(2) +
            "</span><br><span>Nota de Redação: </span><span>" +
            (nota_red / peso_red).toFixed(2) +
            "</span><br><span>Nota Final com pesos: </span><span>" +
            (nota_final.toFixed(2)) +
            "</span><br><br>";
          document.getElementById("nota").innerHTML = nota;
    };
    document.getElementById("botoes").appendChild(btn_sem_peso);
}
