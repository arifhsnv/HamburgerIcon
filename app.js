const hamburgerIcon = document.querySelector(".hamburger-icon")
const listOfNavbar = document.querySelector(".list")
// ================================first method============================================================

  const other=function () {
    hamburgerIcon.classList.toggle("active")
    listOfNavbar.classList.toggle("active")
  }

  hamburgerIcon.addEventListener("click", other)



  // ==================================second method===================================================================


//   const other=function () {
//     if (hamburgerIcon.classList.contains("active")) {
//       hamburgerIcon.classList.remove("active")
//     } else {
//       hamburgerIcon.classList.add("active")
//     }
// if (listOfNavbar.classList.contains("active")) {
//   listOfNavbar.classList.remove("active")
// } else {
//   listOfNavbar.classList.add("active")
// }



// }
// hamburgerIcon.addEventListener("click", other)