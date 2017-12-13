(function() {
const pd = document.getElementById("projectDisplayArea");

function onProjectBtnClick(event) {
  // console.log("pd", pd);
  pd.classList.remove("empty-display");
}

document.querySelectorAll(".project-btn").forEach(a => {
  a.addEventListener("click", onProjectBtnClick);
  // console.log(a);
});
})();
