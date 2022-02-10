export const closeAdminNav = () => {
  const adminNavContainer = document.querySelector(".adminNavContainer");
  adminNavContainer.style.marginLeft = "-200px";
  const rightSideContainer = document.querySelector(".rightSideContainer");
  rightSideContainer.style.marginLeft = "40px";
  const adminNavOpener = document.querySelector(".navOpener");
  adminNavOpener.style.marginLeft = "0px";
};

export const openAdminNav = () => {
  const adminNavContainer = document.querySelector(".adminNavContainer");
  adminNavContainer.style.marginLeft = "0px";
  const rightSideContainer = document.querySelector(".rightSideContainer");
  rightSideContainer.style.marginLeft = "200px";
  const adminNavOpener = document.querySelector(".navOpener");
  adminNavOpener.style.marginLeft = "-40px";
};
