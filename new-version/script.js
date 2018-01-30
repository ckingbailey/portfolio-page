const onProjectBtnClick = (function() {
  const pd = document.getElementById("projectDisplayArea");
  const img = pd.children.projectView;

  return function handleProjectBtnClick(event) {
    event.preventDefault();
    // get the <a> tag with the data attr on it
    const target = event.target;
    const btn = target.dataset.targetfor ?
      target :
      target.tagName === "IMG" ?
        target.parentElement :
        target.tagName === "LI" ?
          target.querySelector("[data-targetfor]") :
          null;
    const targetProject = btn && btn.dataset.targetfor;
    const curProject = pd.children.projectView.dataset && pd.children.projectView.dataset.displayfor;
    if (Array.from(pd.classList).includes("empty-display") ||
      targetProject !== curProject) {
      // if display is empty
      // or if btn for project other than currently loaded project is clicked
      // load project view
      pd.classList.remove("empty-display");
      console.log(btn, targetProject);
      img.setAttribute("src", `img/${targetProject}.png`);
      img.setAttribute("data-displayfor", targetProject);
    }
    // if btn for currently loaded project is clicked, close it
    else {
      pd.classList.add("empty-display");
      img.setAttribute("src", "");
      img.setAttribute("data-displayfor", "");
    }
  }
})();
