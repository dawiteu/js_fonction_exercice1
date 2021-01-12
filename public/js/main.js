let a = (string) => {
    console.log(string);
}

let add = (nb1, nb2) => {
    return nb1+nb2; 
}

let sup = (nb1, nb2) => {
    return nb1-nb2; 
}

let mul = (nb1, nb2) => {
    return nb1*nb2; 
}

let div = (nb1, nb2) => {
    return nb1/nb2; 
}

let reste = (nb1, nb2) => {
    return (nb1/nb2)%2; 
}


let racine = (nombre) => {
    return Math.sqrt(nombre); 
}

let carre = (nb1,nb2) => { 
    return Math.pow(nb1, nb2);
}

let capitalize = (string) => {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.substring(1); 
}

let calcul = (nb1, nb2, op) => {
    let operateurs = ["+", "-", "*", "/"]; 
    let result; 
    if(operateurs.includes(op)){
        switch(op){
            case "+":
                result = add(nb1, nb2);
            break;
            case "-":
                result = sup(nb1, nb2);
            break;
            case "*":
                result = mul(nb1, nb2);
            break;
            case "/":
                result = div(nb1, nb2); 
            break;
            default:
                console.log("error... operateru non recconu");
            break;
        }
    }
    return result;
}


a( add(1,2) ); 

a( sup(2,1) ); 

a( reste(5,2) );

a( racine(5) );

a( carre(5,2) );

a( capitalize("dAWiD ") );

a( calcul(5,2,"*") );
