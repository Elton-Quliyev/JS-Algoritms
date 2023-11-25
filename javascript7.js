//5 fenden umumi ortalama cixsin. Dersler input ile daxil edilsin ve 0dan 100-e qeder qiymet verilsin. Ededi ortalam tapilsin 5 derse gore. Eger ortalama 90+ ise A, 81-90 ise B, 71-80 ise C,c 61-70 ise D, 51-60 ise E, 50den asagi ise Kesilmisiniz ekrana cixsin. Istifadeci menfi eded daxil ede bilmez !


var n=5;
var cem=0;


while( n > 0 ){

var ad=prompt("fenn adini daxil edin");
console.log("fennin adi = ", ad);

var bal=+prompt("fenn balinizi daxil edin");
console.log("fenn bali = ", bal);


if( bal <= 100  &&  bal > 90 ){
    console.log("telebe A qiymeti alib");
}
else if( bal <= 90  &&  bal > 80 ){
    console.log("telebe B qiymeti alib");
}
else if( bal <= 80  &&  bal > 70 ){
    console.log("telebe C qiymeti alib");
}
else if( bal <= 70  &&  bal > 60 ){
    console.log("telebe D qiymeti alib");
}
else if( bal <= 60  &&  bal > 50 ){
    console.log("telebe E qiymeti alib");
}
else if( bal <= 50  &&  bal >= 0 ){
    console.log("telebe F qiymeti aldigina gore kesilib");
}
else{
    console.log("bali duzgun daxil edin");
}


cem = cem + bal;
n--;

}


var ortalama = cem / 5;
console.log("Umumi ortalama (UOMG) = " , ortalama)