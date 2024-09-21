var peso_ling = 0;
var peso_mat = 0;
var peso_ch = 0;
var peso_cn = 0;
var peso_red = 0;
function calcular(sem_peso) {
  var materia = document.getElementById("select-matéria").value;
  var acertos_ling = document.getElementById("acertos_ling").value;
  var acertos_mat = document.getElementById("acertos_mat").value;
  var acertos_ch = document.getElementById("acertos_ch").value;
  var acertos_cn = document.getElementById("acertos_cn").value;
  var redacao = document.getElementById("redacao").value;
  var parametro = document.getElementById("select-parametro").value;
  if (materia == null || acertos_ling == null || acertos_mat == null || acertos_ch == null || acertos_cn == null || redacao == null || parametro == null) {
    alert("Por favor, preencha todos os campos");
    return;
  }
  if (parametro == "2024") {
    media_alunos_ling = 12.7976;
    desvio_alunos_ling = 4.9462;
    media_alunos_mat = 12.1816;
    desvio_alunos_mat = 5.8015;
    media_alunos_cn = 13.5814;
    desvio_alunos_cn = 5.0906;
    media_alunos_ch = 14.8008;
    desvio_alunos_ch = 4.7836;
  }
  if (parametro == "2023") {
    media_alunos_ling = 15.8193;
    desvio_alunos_ling = 5.0174;
    media_alunos_mat = 9.3289;
    desvio_alunos_mat = 5.2204;
    media_alunos_cn = 12.0207;
    desvio_alunos_cn = 5.1675;
    media_alunos_ch = 12.8991;
    desvio_alunos_ch = 4.8384;
  }
  if (parametro == "2022") {
    media_alunos_ling = 13.6985;
    desvio_alunos_ling = 4.6822;
    media_alunos_mat = 10.8931;
    desvio_alunos_mat = 4.5375;
    media_alunos_cn = 10.8409;
    desvio_alunos_cn = 5.3482;
    media_alunos_ch = 13.3243;
    desvio_alunos_ch = 5.3534;
  }
  if (parametro == "2021") {
    media_alunos_ling = 14.900;
    desvio_alunos_ling = 5.230;
    media_alunos_mat = 9.950;
    desvio_alunos_mat = 3.980;
    media_alunos_cn = 11.040;
    desvio_alunos_cn = 5.040;
    media_alunos_ch = 14.390;
    desvio_alunos_ch = 5.370;
  }
  if (parametro == "2020") {
    media_alunos_ling = 16.640;
    desvio_alunos_ling = 5.930;
    media_alunos_mat = 8.250;
    desvio_alunos_mat = 3.590;
    media_alunos_cn = 12.880;
    desvio_alunos_cn = 4.780;
    media_alunos_ch = 15.680;
    desvio_alunos_ch = 5.080;
  }
  if (parametro == "2019") {
    media_alunos_ling = 14.460;
    desvio_alunos_ling = 4.250;
    media_alunos_mat = 13.290;
    desvio_alunos_mat = 4.350;
    media_alunos_cn = 12.650;
    desvio_alunos_cn = 4.880;
    media_alunos_ch = 15.490;
    desvio_alunos_ch = 5.850;
  }
  if (parametro == "2018") {
    media_alunos_ling = 17.020;
    desvio_alunos_ling = 5.580;
    media_alunos_mat = 13.400;
    desvio_alunos_mat = 5.620;
    media_alunos_cn = 18.820;
    desvio_alunos_cn = 6.150;
    media_alunos_ch = 20.520;
    desvio_alunos_ch = 6.130;
  }
  const pesosMaterias = {
    "administração": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 1,
    },
    "agronomia": {
      peso_red: 2,
      peso_mat: 2,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "arquitetura-e-urbanismo": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 1,
    },
    "artes-visuais": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "artes-visuais-licenciatura": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "audiovisual": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 1,
    },
    "ciência-da-computação": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 2,
      peso_ch: 1,
      peso_cn: 2,
    },
    "ciências-biológicas": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "ciências-biológicas-licenciatura": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "ciências-contábeis": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 1,
      peso_ch: 2,
      peso_cn: 1,
    },
    "ciências-econômicas": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 1,
      peso_ch: 2,
      peso_cn: 1,
    },
    "direito": {
      peso_red: 2,
      peso_mat: 2,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "educação-física": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "educação-física-licenciatura": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "enfermagem": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "engenharia-civil": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "engenharia-de-computação": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "engenharia-de-produção": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "engenharia-de-software": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 2,
      peso_ch: 1,
      peso_cn: 2,
    },
    "engenharia-elétrica": {
      peso_red: 2,
      peso_mat: 4,
      peso_ling: 2,
      peso_ch: 1,
      peso_cn: 2,
    },
    "engenharia-química": {
      peso_red: 2,
      peso_mat: 2,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "farmácia": {
      peso_red: 2,
      peso_mat: 2,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "fisioterapia": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 2,
      peso_cn: 2,
    },
    "história": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "licenciatura-intercultural-indígena": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 1,
    },
    "pedagogia-intercultural-indígena": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 1,
    },
    "jornalismo": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "letras-português-espanhol": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 1,
      peso_cn: 1,
    },
    "medicina": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 3,
    },
    "medicina-veterinária": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 3,
    },
    "nutrição": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 2,
      peso_cn: 3,
    },
    "odontologia": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 3,
    },
    "pedagogia": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "psicologia": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 2,
      peso_ch: 2,
      peso_cn: 1,
    },
    "sistemas-de-informação": {
      peso_red: 2,
      peso_mat: 3,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
    "zootecnia": {
      peso_red: 2,
      peso_mat: 1,
      peso_ling: 1,
      peso_ch: 1,
      peso_cn: 2,
    },
  };
  const pesos_parametro = pesosMaterias[materia];
  if (pesos_parametro) {
    peso_red = pesos_parametro.peso_red;
    peso_mat = pesos_parametro.peso_mat;
    peso_ling = pesos_parametro.peso_ling;
    peso_ch = pesos_parametro.peso_ch;
    peso_cn = pesos_parametro.peso_cn;
  } else {
    alert("Por favor, preencha todos os campos");
    console.error(`Materia não encontrada: ${materia}`);

  }
  if (sem_peso == 0) {
    materia = 0;
  }
  var nota_ling =
    (500 + (100 * ((acertos_ling * 2) - media_alunos_ling)) / desvio_alunos_ling) * peso_ling; // EP = 500 + 100 (PONTOS NA MATÉRIA) - MÉDIA TOTAL)/DESVIO PADRÃO
  var nota_mat = (500 + (100 * ((acertos_mat * 2) - media_alunos_mat)) / desvio_alunos_mat) * peso_mat;
  var nota_cn = (500 + (100 * ((acertos_cn * 2) - media_alunos_cn)) / desvio_alunos_cn) * peso_cn;
  var nota_ch = (500 + (100 * ((acertos_ch * 2) - media_alunos_ch)) / desvio_alunos_ch) * peso_ch;
  var nota_red = redacao * peso_red;
  var nota_final =
    (nota_ling + nota_mat + nota_ch + nota_cn + nota_red) /
    (peso_ling + peso_mat + peso_cn + peso_ch + peso_red);
  var pesos =
    "<span>Curso: " +
    materia.toUpperCase().replace("-", " ") +"</span><br><br>" +
    "<span>Peso de Linguagens: </span><span>" +
    peso_ling +
    "</span><span>|  Peso de Matemática: </span><span>" +
    peso_mat +
    "</span><br><span>Peso de Ciências Humanas: </span><span style='display:inline'>" +
    peso_ch +
    "</span><span>|  Peso de Ciências da natureza: </span><span> " +
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
  document.getElementById("botao1").appendChild(btn_reiniciar);
  var btn_sem_peso = document.createElement("button");
  btn_sem_peso.textContent = "Calcular sem pesos";
  btn_sem_peso.id = "btn_sem_peso";
  btn_sem_peso.style.padding = "10px";
  btn_sem_peso.style.position = "relative";
  btn_sem_peso.style.top = "22px";
  btn_sem_peso.style.width = "150px";
  btn_sem_peso.style.height = "60px";
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
      nota_final.toFixed(2) +
      "</span><br><br>";
    document.getElementById("nota").innerHTML = nota;
  };
  document.getElementById("botao2").appendChild(btn_sem_peso);
}
