function openTab(evt, TabName) {
  var i, tabcontent, navlinks;
  tabcontent = document.getElementsByClassName("rowsect");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  navlinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}