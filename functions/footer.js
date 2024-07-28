import milkywayRun from "../assets/milkywayrun.gif";
const footerDiv = (() => {
  const footer = document.createElement("div");
  footer.id = "footer";

 

  const milkywayRunImg = document.createElement("img");
  milkywayRunImg.src = milkywayRun;
  milkywayRunImg.id = "milkyRun";
  footer.appendChild(milkywayRunImg);
  
  document.body.appendChild(footer);

  return footer;
});

export default footerDiv;
