

//ededdeki sifirlarin sayini tapsin


var n=prompt("ededi daxil et 0-lari deyim");

console.log( "n = ", n )

var say = 0;

while ( n > 0 ){

    k = n % 10 ;

    if (k == 0){

        say ++;

    }

    n = n - k ;
    n = n / 10 ;
}

console.log( say );