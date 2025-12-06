//retourne année actuelle
function setFullYear(tagId) {
  const today = new Date();
  const fullYear = today.getFullYear();
  const span = document.querySelector(`#${tagId}`);
  span.innerHTML = fullYear;
}
