const onProjectBtnClick = (function() {
  const pd = document.getElementById("projectDisplayArea");
  const img = pd.children.projectView;
  const projects = ["bisbeevacationrental", "turtrello"];

  return function handleProjectBtnClick(event) {
    event.preventDefault();
    // get the <a> tag with the data attr on it
    const target = event.target;
    const btn = target.dataset.projectnum ?
      target :
      target.tagName === "IMG" ?
        target.parentElement :
        target.tagName === "LI" ?
          target.querySelector("[data-projectnum]") :
          null;
    const curProject = btn && btn.dataset.projectnum;
    if (Array.from(pd.classList).includes("empty-display") ||
      +curProject !== projects.indexOf(img.src)) {
      // if display is empty
      // or if btn for project other than currently loaded project is clicked
      // load project view
      pd.classList.remove("empty-display");
      console.log(curProject, img.src);
      img.setAttribute("src", `img/${projects[curProject]}.png`);
    }
    // if btn for currently loaded project is clicked, close it
    else pd.classList.add("empty-display");
  }
})();
