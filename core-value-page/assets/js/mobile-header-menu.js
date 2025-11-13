function menuClick() {
  const nodeElement = document.getElementById("menu-item");
  if (nodeElement.classList.contains("header__main-menu__mobile")) {
    nodeElement.classList.remove("header__main-menu__mobile");
  } else {
    nodeElement.classList.add("header__main-menu__mobile");
  }
}
