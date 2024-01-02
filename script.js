function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const avatar = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.png")
    avatar.setAttribute("alt", "pessoa com oculos")
  } else {
    avatar.setAttribute("src", "./assets/avatar.png")
    avatar.setAttribute("alt", "pessoa sem oculos")
  }
}
