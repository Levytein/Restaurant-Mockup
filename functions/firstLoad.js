import headerDiv from "./header";
import menuDiv from "../pages/menu";
const firstLoad = (() => {
  const header = headerDiv();
  const menu = menuDiv();
  const footer = footerDiv();
  document.body.prepend(header);
  document.getElementById("content").appendChild(menu);
  
});

export default firstLoad;