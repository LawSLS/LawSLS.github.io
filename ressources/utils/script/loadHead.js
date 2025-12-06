// loadHead.js
fetch("/ressources/utils/html/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.head.insertAdjacentHTML("afterbegin", data);
  })
  .catch((err) => console.error("Erreur lors du chargement du head :", err));
