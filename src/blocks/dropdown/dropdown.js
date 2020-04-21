
//if(window.location.toString().indexOf('welcome.html')>0) //check page

var dropdawn_field = document.getElementById("dropdawn__guests-calc"); //label dropdawn field 
var dropdawn_list = document.getElementById("dropdawn__buttons"); //invisible list
var dropdawn_block = document.getElementById("border_style");

dropdawn_field.onclick = function(){
    if(dropdawn_list.style.display == "none")
    {
        dropdawn_list.style.display = "block";
        dropdawn_block.style.borderRadius="5px 5px 0 0";  
    }
    else{
        dropdawn_list.style.display = "none";
        dropdawn_block.style.borderRadius="5px";
    }
}



//for adults
var plus_adult = document.getElementById("plus-adult");
var minus_adult = document.getElementById("minus-adult");
var num_adult = document.getElementById("number-adult");

plus_adult.onclick = function(){
    var count = num_adult.innerHTML;
    minus_adult.style.color = "#8F90A0";
    minus_adult.style.border = "1px solid #8F90A0";
    count++;
    num_adult.innerHTML = count;
}
minus_adult.onclick = function(){
    if(num_adult.innerHTML == 1)
    {
        minus_adult.style.color = "#C7C7C";
        minus_adult.style.border = "1px solid #C7C7CF";
    }
    if(num_adult.innerHTML > 0){
        var count = num_adult.innerHTML;
        count--;
        num.innerHTML = count;
    }
}

//for childrents
var plus_child = document.getElementById("plus-child");
var minus_child = document.getElementById("minus-child");
var num_child = document.getElementById("number-child");

plus_child.onclick = function(){
    var count = num_child.innerHTML;
    minus_child.style.color = "#8F90A0";
    minus_child.style.border = "1px solid #8F90A0";
    count++;
    num_child.innerHTML = count;
}
minus_child.onclick = function(){
    if(num_child.innerHTML == 1)
    {
        minus_child.style.color = "#C7C7C";
        minus_child.style.border = "1px solid #C7C7CF";
    }
    if(num_child.innerHTML > 0){
        var count = num_child.innerHTML;
        count--;
        num_child.innerHTML = count;
    }
}


//for baby
var plus_baby = document.getElementById("plus-baby");
var minus_baby = document.getElementById("minus-baby");
var num_baby = document.getElementById("number-baby");

plus_baby.onclick = function(){
    var count = num_baby.innerHTML;
    minus_baby.style.color = "#8F90A0";
    minus_baby.style.border = "1px solid #8F90A0";
    count++;
    num_baby.innerHTML = count;
}
minus_baby.onclick = function(){
    if(num_baby.innerHTML == 1)
    {
        minus_baby.style.color = "#C7C7C";
        minus_baby.style.border = "1px solid #C7C7CF";
    }
    if(num_baby.innerHTML > 0){
        var count = num_baby.innerHTML;
        count--;
        num_baby.innerHTML = count;
    }
}


//clear ana apply buttons
var ok_btn = document.getElementById("ok-but");

ok_btn.onclick = function(){
    document.getElementById("drop_val").value = Number(num_adult.innerHTML) + Number(num_child.innerHTML);
    if(Number(num_baby.innerHTML) > 0){     //Проверка есть ли младенцы
        document.getElementById("drop_val").value = String(document.getElementById("drop_val").value) + ", " + num_baby.innerHTML + " младенец";
    }
    //var gusts = document.getElementById("drop_val").value; 
    //localStorage.setItem('inputValue', gusts);      //значение записывается в переменную, почитать
    dropdawn_list.style.display = "none";
    dropdawn_block.style.borderRadius="5px";
}

var clear_btn = document.getElementById("clear-but");

clear_btn.onclick = function(){
    document.getElementById("drop_val").value = null;
    gusts = null;
    num_adult.innerHTML = 0;
    num_child.innerHTML = 0;
    num_baby.innerHTML = 0;
    dropdawn_list.style.display = "none";
    dropdawn_block.style.borderRadius="5px";
}


// comfort dropdawn 
var dropdawn__comfort = document.getElementById("dropdawn__comfort-calc");
var dropdawn__comfort_list = document.getElementById("dropdawn-comfort__buttons");
var dropdawn__comfort_block = document.getElementById("comfort-border_style");

var plus_bedroom = document.getElementById("plus-bedroom");
var minus_bedroom = document.getElementById("minus-bedroom");
var num_bedroom = document.getElementById("number-bedroom");

var plus_bed = document.getElementById("plus-bed");
var minus_bed = document.getElementById("minus-bed");
var num_bed = document.getElementById("number-bed");

var plus_bathroom = document.getElementById("plus-bathroom");
var minus_bathroom = document.getElementById("minus-bathroom");
var num_bathroom = document.getElementById("number-bathroom");


dropdawn__comfort.onclick = function(){
    if(dropdawn__comfort_list.style.display == "none")
    {
        dropdawn__comfort_list.style.display = "block";
        dropdawn__comfort_block.style.borderRadius="5px 5px 0 0";  
    }else{
        dropdawn__comfort_list.style.display = "none";
        dropdawn__comfort_block.style.borderRadius="5px";
    }

    var bedroom;
    if(Number(num_bedroom.innerHTML) == 0){bedroom = ""}
    if(Number(num_bedroom.innerHTML) == 1){bedroom = " спаленя, "}
    if(Number(num_bedroom.innerHTML) >= 2 && Number(num_bed.innerHTML) < 5){bedroom = " спалени, "}
    if(Number(num_bedroom.innerHTML) >= 5){bedroom = " спален, "}
    
    var bed;
    if(Number(num_bed.innerHTML) == 0){bed = ""}
    if(Number(num_bed.innerHTML) == 1){bed = " кровать, "}
    if(Number(num_bed.innerHTML) >= 2 && Number(num_bed.innerHTML) < 5){bed = " кровати, "}
    if(Number(num_bed.innerHTML) >= 5){bed = " кроватей, "}

    var bathroom;
    if(Number(num_bathroom.innerHTML) == 0){bathroom = ""}
    if(Number(num_bathroom.innerHTML) == 1){bathroom = " ванная комната"}
    if(Number(num_bathroom.innerHTML) >= 2 && Number(num_bed.innerHTML) < 5){bathroom = " ванных комнаты"}
    if(Number(num_bathroom.innerHTML) >= 5){bathroom = " ванных комнат"}
    
    
    var value_comforta = "";
    if(Number(num_bedroom.innerHTML) > 0 ){
        value_comforta += num_bedroom.innerHTML + bedroom;
    }
    if(Number(num_bed.innerHTML) > 0){
        value_comforta += num_bed.innerHTML + bed;
    }
    if(Number(num_bathroom.innerHTML) > 0){
        value_comforta += num_bathroom.innerHTML + bathroom;
    }
    document.getElementById("drop-comfort_val").value = value_comforta;


}

//for bedrooms


plus_bedroom.onclick = function(){
    var count = num_bedroom.innerHTML;
    minus_bedroom.style.color = "#8F90A0";
    minus_bedroom.style.border = "1px solid #8F90A0";
    count++;
    num_bedroom.innerHTML = count;
}
minus_bedroom.onclick = function(){
    if(num_bedroom.innerHTML == 1)
    {
        minus_bedroom.style.color = "#C7C7C";
        minus_bedroom.style.border = "1px solid #C7C7CF";
    }
    if(num_bedroom.innerHTML > 0){
        var count = num_bedroom.innerHTML;
        count--;
        num_bedroom.innerHTML = count;
    }
}

//for beds
plus_bed.onclick = function(){
    var count = num_bed.innerHTML;
    minus_bed.style.color = "#8F90A0";
    minus_bed.style.border = "1px solid #8F90A0";
    count++;
    num_bed.innerHTML = count;
}

minus_bed.onclick = function(){
    if(num_bed.innerHTML == 1)
    {
        minus_bed.style.color = "#C7C7C";
        minus_bed.style.border = "1px solid #C7C7CF";
    }
    if(num_bed.innerHTML > 0){
        var count = num_bed.innerHTML;
        count--;
        num_bed.innerHTML = count;
    }

  
}


//for bathroom
plus_bathroom.onclick = function(){
    var count = num_bathroom.innerHTML;
    minus_bathroom.style.color = "#8F90A0";
    minus_bathroom.style.border = "1px solid #8F90A0";
    count++;
    num_bathroom.innerHTML = count;
}
minus_bathroom.onclick = function(){
    if(num_bathroom.innerHTML == 1)
    {
        minus_bathroom.style.color = "#C7C7C";
        minus_bathroom.style.border = "1px solid #C7C7CF";
    }
    if(num_bathroom.innerHTML > 0){
        var count = num_bathroom.innerHTML;
        count--;
        num_bathroom.innerHTML = count;
    }
}