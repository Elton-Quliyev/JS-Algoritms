//Input ile daxil olunan n sayda ededdin cemi.

var n=prompt("nece eded daxil edek?");

var cem = 0;



while( n > 0 ){

    var eded = +prompt("ededi daxil edin");

    cem = cem + eded;

    n--;
}
console.log( cem );