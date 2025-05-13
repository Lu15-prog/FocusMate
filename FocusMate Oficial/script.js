const formulario = document.getElementById("questionario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const respostas = [
    formulario.q1.value,
    formulario.q2.value,
    formulario.q3.value,
    formulario.q4.value,
    formulario.q5.value
  ];

  
  let contagem = { A: 0, B: 0, C: 0 };
  respostas.forEach(resp => contagem[resp]++);

  
  localStorage.setItem("respostas", JSON.stringify(contagem));

  
  window.location.href = "resultado.html";
});

