const raket = document.querySelector("img")
const button = document.querySelector("button")

button.addEventListener("click", go)

function go() {
  // als view transitions ondersteund worden
  if (document.startViewTransition) {
    // start een view transition
    // https://piccalil.li/blog/start-implementing-view-transitions-on-your-websites-today/
    // voeg dan de class "go" toe aan de raket
    // verander de tekst van de button in "go" (textContent)
    // disable de button (.disabled)

    document.startViewTransition(() => {
      raket.classList.add("go")
      button.textContent = "go"
      button.disabled = true
    })

  }
  // anders als view transitions niet ondersteund worden
  else {
    // toon een boodschap met alert() dat VT''s niet worden ondersteund
    alert("view transitions worden niet ondersteund :(")

  }
}