export const closeAdminNav = () => {
  const adminNavContainer = document.querySelector(".adminNavContainer");
  adminNavContainer.style.marginLeft = "-200px";
  const rightSideContainer = document.querySelector(".rightSideContainer");
  rightSideContainer.style.marginLeft = "40px";
  const adminNavOpener = document.querySelector(".navOpener");
  adminNavOpener.style.marginLeft = "-40px";
};

export const openAdminNav = () => {
  const adminNavContainer = document.querySelector(".adminNavContainer");
  adminNavContainer.style.marginLeft = "0px";
  const rightSideContainer = document.querySelector(".rightSideContainer");
  rightSideContainer.style.marginLeft = "200px";
  const adminNavOpener = document.querySelector(".navOpener");
  adminNavOpener.style.marginLeft = "-40px";
};

export const updateInputvalues = (dataRow) => {
  document.getElementsByName("Field").setAttribute.value=dataRow.Field;
  document.getElementsByName("Location").setAttribute.value=dataRow.Location;
  document.getElementsByName("Asset ID").setAttribute.value=dataRow.asset_id;
  document.getElementsByName("Jur. ID").setAttribute.value=dataRow.jur_id;
}
