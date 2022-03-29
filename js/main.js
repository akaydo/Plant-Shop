$(function(){

    $('.info__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev">Previous<br><span>Kaktus Plant</span></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next">Next<br><span>Rahasia Plant</span></button>',
    });

});

let data,
    table = document.createElement('table'),
    tr = document.createElement('tr'),
    rows = [],
    max = 0,
    i;


async function getResponse(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let content = await response.json()

    data = content.filter(function(idPerson){
        return ((idPerson.userId === 5) && (idPerson.completed === false)) ;
    });
    fillTable();
}

getResponse()

function fillTable() {
var cols = [];
for (var i = 0; i < data.length; i++) {
    for (var k in data[i]) {
        if (cols.indexOf(k) === -1) {
            cols.push(k);
        }
    }
}

var table = document.createElement("table");
var tr = table.insertRow(-1);
for (var i = 0; i < cols.length; i++) {
    var theader = document.createElement("th");
    theader.innerHTML = cols[i];
    tr.appendChild(theader);
}

for (var i = 0; i < data.length; i++) {
    trow = table.insertRow(-1);
    for (var j = 0; j < cols.length; j++) {
        var cell = trow.insertCell(-1);
        cell.innerHTML = data[i][cols[j]];
    }
}

var el = document.getElementById("table");
    el.innerHTML = "";
    el.appendChild(table);
}    



