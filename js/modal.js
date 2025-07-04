function openModal(id) {
  const service = servicesData.find((s) => s.id === id);
  if (service) {
    document.getElementById("modal-title").textContent = service.titulo;

    const descricaoDiv = document.getElementById("modal-descricao");
    descricaoDiv.innerHTML = service.descricao
      .map((p) => `<p>${p}</p>`)
      .join("");

    const imagensDiv = document.getElementById("modal-imagens");
    imagensDiv.innerHTML = "";
    service.imagens.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      imagensDiv.appendChild(img);
    });

    document.getElementById("modal").style.display = "flex";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
