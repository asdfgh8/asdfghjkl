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
var sum, count=[], zagal=0, countofprod=[], tempor=[];
//Функція, що розраховує загальну суму покупки
function modifySum (inp) {
count = document.getElementsByClassName("totcount");
for(var i = 0; i < count.length; i++){
    countofprod[i] = count[i].value;
    }
countofprod.reverse();
//Підрахунок та виведення суми за певний товар
sum = document.getElementsByClassName("zag");
for(var i = 0; i < countofprod.length; i++){
    tempor[i] = Number(countofprod[i]) * Number(basket[i].priceforone);
    }
tempor.reverse();
for(var i = 0; i < countofprod.length; i++){
    sum[i].innerHTML = tempor[i];
    }
//Підрахунок та виведення загальної суми покупки
for(var i = 0; i < tempor.length; i++){
    zagal += Number(tempor[i]);
    }
document.getElementById("zagsum").innerHTML = `${zagal} грн.`;
document.getElementById("totals").innerHTML = `Загальна сума покупки: ${zagal} грн.`;
zagal = 0;
}

// Функція, що додає товари в кошик
function addToBasket (evt, TabName, a, b) {
  var d=0, tabcontent, navlinks;
c = Number(b);
  tabcontent = document.getElementsByClassName("rowsect");
  for ( var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(TabName).style.display = "block";
basket.add(a, b);
var tabl=document.getElementById("purchase");
var newrow = tabl.insertRow(0); // Додавання нового рядка в таблицю
newrow.innerHTML = `<td>${a}</td><td>${b}</td><td class="zag"></td><td><input class="form-control totcount" type="number" placeholder="0" min="1" max="10" onchange="modifySum(value)"></td>`;
}
