//nput ile daxil edilen 5 ededden menfi olanların toplamını, cut olanlarin vurugunu tapin,

var n=5;
var cem = 0;
var hasil = 1;

while( n > 0 ){

    var eded=+prompt("ededi daxil edin");
   
    n--;

    if( eded < 0){

        cem = cem +eded;
    }

    if( eded % 2 == 0){

        hasil = hasil * eded;
    }

}
console.log( "MENFI OLANLARIN CEEMI" , cem);
console.log( "cut olanlarin vurugu =" , hasil)