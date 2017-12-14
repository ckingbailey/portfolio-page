(function() {
const pd = document.getElementById("projectDisplayArea");

function onProjectBtnClick(event) {
  event.preventDefault();
  if (Array.from(pd.classList).includes("empty-display")) {
    pd.classList.remove("empty-display");
  } else pd.classList.add("empty-display");
}

document.querySelectorAll(".project-btn").forEach(a => {
  a.addEventListener("click", onProjectBtnClick);
});
})();
