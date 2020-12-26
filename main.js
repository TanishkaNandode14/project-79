var menu = [

    "Margherita",
    "Double Cheese Margherita",
    "Farm House",
    "Peppy Paneer",
    "Mexican Green Wave",
    "Deluxe Veggie",
    "Veg Extravaganza"
];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu.sort();

    for (var i = 0; i < menu.length; i++) {
        htmldata = htmldata + '<li>' + menu[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item() 
{
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();
    htmldata="<section class='cards'>"
    for(var i=0;
       i<menu.length;
       i++)
        {
            htmldata=htmldata+'<div class = "card">' + '<img src="images/pizzaImg.png"/>'+menu[i] + '</div>'
        }
    htmldata=htmldata+"</section"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}