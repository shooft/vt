
const list = document.querySelector("div")
const buttonPlus = document.querySelector("body > button")


///////////////
// TOEVOEGEN //
///////////////

// klikken op de plus button
buttonPlus.addEventListener("click", handleAddClick)


// als er op de plus button is geklikt
function handleAddClick() {

  ///////////////////////////////////////////////////////////////////////////////
  // voeg hier het starten van de view-transition toe (als dat ondersteund wordt)
  ///////////////////////////////////////////////////////////////////////////////
  
  if (document.startViewTransition) {
    const vt = document.startViewTransition(() => {
      addFilter()
    })
  } else {
    addFilter()
  }
}

// een button aan de div toevoegen meet een van de teksten uit de array
function addFilter() {
  const filters = ["geel","20 jaar","15 euro","4 sterren","utrecht","apple","64MB","nieuw","eiken","eco","glutenvrij","proteïne","bonus","aanbieding","sans-serif","pre-loved","zomer","beta","jarig","tuin","glitter","outdoor","japan","clipart"]
  
  let filter = filters[ Math.floor( Math.random() * filters.length ) ]
  let filterHTML = `<button>${filter}</button>`
  list.insertAdjacentHTML("beforeend", filterHTML)
}





/////////////////
// VERWIJDEREN //
/////////////////

// klikken op de hele lijst (om te verwijderen)
list.addEventListener("click", handleListClick)


// als er op de lijst is geklikt (om te verwijderen)
function handleListClick(event) {
  // bepalen wat het target is waarop geklikt is
  // dat kan een van de buttons zijn (maar ook de div als er op een ruimte tussen buttons wordt geklikt)
  let target = event.target;

  // als het target een button is wordt de button verwijderd
  if (target.tagName == "BUTTON") {

    ///////////////////////////////////////////////////////////////////////////////
    // voeg hier het starten van de view-transition toe (als dat ondersteund wordt)
    ///////////////////////////////////////////////////////////////////////////////

    if (document.startViewTransition) {
      const vt = document.startViewTransition(() => {
        removeFilter(target)
      })

    } else {
      removeFilter(target)
    }
  } 
}

// de button verwijderen
function removeFilter(target) {
  target.remove()
}