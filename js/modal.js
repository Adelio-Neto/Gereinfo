function openModal(id) {
  const service = servicesData.find((s) => s.id === id);
  if (service) {
    // Preencher Título
    document.querySelector("#modal .services-intro h2").textContent =
      service.titulo;

    // Preencher Descrição
    const paragraphs = service.descricao.map((p) => `<p>${p}</p>`).join("");
    document.querySelector(
      "#modal .services-intro"
    ).innerHTML = `<h2>${service.titulo}</h2>${paragraphs}`;

    // Preencher Imagens no lado direito
    const ajustarDiv = document.querySelector("#modal .ajustar");
    ajustarDiv.innerHTML = "";
    service.imagens.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = "100%";
      img.style.marginBottom = "10px";
      ajustarDiv.appendChild(img);
    });

    // Exibir Modal
    document.getElementById("modal").style.display = "block";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
