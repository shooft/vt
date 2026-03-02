
const list = document.querySelector("ul")
const items = document.querySelectorAll("li")
const button = document.querySelector("button")

button.addEventListener("click", husselen)

async function husselen() {

  // Check of VT's ondersteund worden
  // Zo ja, start de VT en roep de functie husselenMaar aan
  // Zo nee, roep de functie husselenMaar direct aan
  // bron: piccalil.li/blog/start-implementing-view-transitions-on-your-websites-today/ (Cyd :)

  // Bonus 🌶️
  // Roep de functie disableButton ook aan na het starten van de VT
  // En roep de functie enableButton aan als de VT klaar is
  // bron: developer.mozilla.org/en-US/docs/Web/API/ViewTransition/finished

  if (document.startViewTransition) {
    const vt = document.startViewTransition(() => {
      husselenMaar()
      disableButton()
    })

    try {
      await vt.finished;
    } finally {
      enableButton()
    }

  } else {
    husselenMaar()
  }
}


function husselenMaar() {
  for(let i = 0; i < items.length; i++) {
    let nr =  Math.floor( Math.random() * items.length )
    list.prepend(items[nr]);
  }
}

function disableButton() {
  button.disabled = true;
}

function enableButton() {
  button.disabled = false;
}