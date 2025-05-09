const resultado = document.getElementById("respostaFinal");
const contagem = JSON.parse(localStorage.getItem("respostas"));

let maisMarcada = "";
if (contagem.A > contagem.B && contagem.A > contagem.C) {
  maisMarcada = "A";
} else if (contagem.B > contagem.A && contagem.B > contagem.C) {
  maisMarcada = "B";
} else {
  maisMarcada = "C";
}

// Mostra o resultado com base na letra
let mensagem = "";

if (maisMarcada === "A") {
  mensagem = " <strong>Procrastinador Perfeccionista</strong> — Evita começar tarefas por receio de não executá-las perfeitamente.";
} else if (maisMarcada === "B") {
  mensagem = " <strong>Procrastinador Ansioso</strong> — Você acha que não vai dar conta das tarefas que precisa fazer.";
} else {
  mensagem = " <strong>Procrastinador Apressado</strong> —  Você confunde urgência com foco, e acredita que a adrenalina do prazo o impulsiona, quando na verdade está se desgastando mentalmente.";
}

resultado.innerHTML = `<p>${mensagem}</p>`; 
