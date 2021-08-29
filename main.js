menu_list_array =["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza",
"Veg Margherita Pizza ","Veg Supreme Pizza"];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        console.log(htmldata);
        document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata2;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata2=menu_list_array;
        for(var i=0;i<menu_list_array.length;i++){
        htmldata2=htmldata2+imgtags+ menu_list_array[i]+'<br>';
        }
        document.getElementById("display_addedmenu").innerHTML = htmldata2;		
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}