function toggleMode() {
  const html = document.documentElement
    html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarp.png")
  } else {
    img.setAttribute("src", "./assets/avatarp.png")
  }

  //se tiver light - adicionar img light
  //substiir a imagem
}