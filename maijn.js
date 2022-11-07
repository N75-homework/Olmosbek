// var sm = prompt('santimetrda kiriting;');
// var metr = 100;
// var result = sm - sm % metr;
// var x = result / 100;
// console.log(result);
// alert('siz kiritgan qiymat ' + x + ' metrga teng'); 

var grant = 'Grand asosida talabalikka qabul qilindingiz';
var kantrakt = 'Siz talabaalikga kontrakt asosida qabul qilindingiz';
var yiqilgan = 'Siz OTM da oqishga tavsiya etilmadiz';
var error = 'Siz notgri malumot kiritdingiz ';
var xato = 'Texnik nosozlik ';
var firstName = prompt('Ismingizni kiriting');


var OTM = prompt(firstName + ' OTM lar dan birini tanlang: 1.TDIU  2.TDMI  3.MU');

var ball = prompt( firstName + ' balingizni kiriting:');

if (OTM == 1){   
    if(ball >= 150){
        alert( grant);
    }
    else if( ball > 120){
        alert(kantrakt);
    }
    else if(120 >= ball > 0){
        alert( yiqilgan);
    }

    if ( 189 < ball) {
    alert(xato)
    }
    else{
        alert(error);
    }
}else if(OTM == 2){
    if(ball >= 160){
        alert(grant);
    }
    if ( 189 < ball) {
        alert(xato)
        }
    else if(ball > 100){
        alert(kantrakt);
    }
    else if(100 >= ball > 0){
        alert(yiqilgan);
    }
    else{
        alert(error);
    }
}else if(OTM == 3){
    if(ball >= 180){
        alert(grant);
    }
    if ( 189 < ball) {
        alert(xato)
        }
    else if( ball > 168){
        alert(kantrakt);
    }
    else if(168 >= ball > 0){
        alert(yiqilgan);
    }
    else{
        alert(error);
    }
}else{
    alert(error);
}