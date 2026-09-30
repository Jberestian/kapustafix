// Get Current Year
function getCurrentYear() {
  var el = document.querySelector("#displayDateYear");
  if (el) el.innerText = new Date().getFullYear();
}
getCurrentYear();
