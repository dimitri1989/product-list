var searchValue = document.querySelector("#gsearch");
var addButon =
  '<div class="items"><div class="items__add"><img src="img/icons/edit (1) 2.png" alt=""></div><div class="items__delete"><img src="img/icons/trash-2 2.png" alt=""></div></div>';
var imgDelivered = '<div class="delivered"> Delivered</div>';
var process = '<div class="process"> Process</div>';
var cancel = '<div class="canceled"> Canceled</div>';
let array2 = [
  [
    "#20462",
    '<div class="user"><div><img src="img/user/1.png" alt=""></div><p>hat</p></div>',
    "Matt Dickerson",
    "13/05/2022",
    "$4.95	",
    "Tranfer Bank",
    imgDelivered,
    addButon,
  ],
  [
    "#18933",
    '<div class="user"><div><img src="img/user/2.png" alt=""></div><p>Laptop</p></div>',
    "Wiktoria",
    "22/05/2022",
    "$8.95	",
    "Cash on Delivery",
    imgDelivered,
    addButon,
  ],
  [
    "#45169",
    '<div class="user"><div><img src="img/user/3.png" alt=""></div><p>Phone</p></div>',
    "Trixie Byrd",
    "15/06/2022",
    "$1,149.95	",
    "Cash on Delivery",
    process,
    addButon,
  ],
  [
    "#34304",
    '<div class="user"><div><img src="img/user/4.png" alt=""></div><p>Bag</p></div>',
    "Brad Mason",
    "06/09/2022",
    "$899.95	",
    "Tranfer Bank",
    process,
    addButon,
  ],
  [
    "#17188",
    '<div class="user"><div><img src="img/user/5.png" alt=""></div><p>Headset</p></div>',
    "Sanderson",
    "25/09/2022",
    "$22.95	",
    "Cash on Delivery",
    cancel,
    addButon,
  ],
  [
    "#73003",
    '<div class="user"><div><img src="img/user/6.png" alt=""></div><p>Mouse</p></div>',
    "Jun Redfern",
    "04/10/2022",
    "$54.95	",
    "Tranfer Bank",
    imgDelivered,
    addButon,
  ],
  [
    "#58825",
    '<div class="user"><div><img src="img/user/7.png" alt=""></div><p>Clock</p></div>',
    "Miriam Kidd",
    "17/10/2022",
    "$174.95",
    "Tranfer Bank",
    imgDelivered,
    addButon,
  ],
  [
    "#44122",
    '<div class="user"><div><img src="img/user/8.png" alt=""></div><p>T-shirt</p></div>',
    "Dominic",
    "24/10/2022",
    "$249.95",
    "Cash on Delivery",
    imgDelivered,
    addButon,
  ],
  [
    "#89094",
    '<div class="user"><div><img src="img/user/9.png" alt=""></div><p>Monitor</p></div>',
    "Shanice",
    "01/11/2022",
    "$899.95	",
    "Tranfer Bank",
    cancel,
    addButon,
  ],
  [
    "#85252",
    '<div class="user"><div><img src="img/user/10.png" alt=""></div><p>Keyboard</p></div>',
    "Poppy-Rose",
    "22/11/2022",
    "$6.948	",
    "Tranfer Bank",
    process,
    addButon,
  ]
];

searchValue.addEventListener("keyup", function () {
  renderTable(searchValue.value);
});

renderTable();


function renderTable(search = "") {
  var c = document.querySelector(".tr-class");
  var thr = document.querySelector("tbody");

  document.querySelector("tbody").innerHTML = "";

  for (let i = 0; i < array2.length; i++) {
    if (search != "") {
      let str = array2[i][2].toLowerCase();
      if (!str.includes(search.toLowerCase())) {
        continue;
      }
    }
    var tr = document.createElement("tr");
    if(thr.childElementCount % 2 ==0){
      tr.classList.add("tr2");
    }
    

    
    for (let g = 0; g < array2[i].length; g++) {
      var td = document.createElement("td");
      thr.append(tr);
      tr.append(td);
      td.innerHTML = array2[i][g];
    }
  }
}

