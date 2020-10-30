// Функція для переходу між вкладками, що робить необхідні секції видимими, а інші приховує
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


var basket = []; //Масив об'єктів для збереження значень у кошику
basket.add = function (name, priceforone) {
  var product = {
    'name': name,
    'priceforone': priceforone,
  }
  basket.push(product);
}

// Необхідні змінні
var sum=0, count=0, zagal=0;
//Функція для підрахунку загальної суми покупки
function modifySum (inp) {
count = Number(inp);
sum=count * c;
document.getElementById("zagsum").innerHTML = zagal;
}

// Функція, що додає товари в кошик
function addToBasket (evt, TabName, a, b) {
  var i, d=0, tabcontent, navlinks;
c = Number(b);

  tabcontent = document.getElementsByClassName("rowsect");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(TabName).style.display = "block";
basket.add(a, b);
var tabl=document.getElementById("purchase");
var newrow = tabl.insertRow(0); // Додавання нового рядка в таблицю
newrow.innerHTML = `<td>${a}</td><td>${b}</td><td><input class="form-control" type="number" placeholder="1" min="1" max="10" onchange="modifySum(value)"></td>`;
zagal +=sum;
}
