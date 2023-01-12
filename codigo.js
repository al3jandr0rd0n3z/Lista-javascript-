for(var i=0; i <=10; i++){
    console.log(i);
}

var frutasyverduras = ["pera", "mango","avocado"]

frutasyverduras.push("fresa");

frutasyverduras[2]= "limon"

for(var i=0; i<frutasyverduras; i++){
    console.log(frutasyverduras[i]);
}
var j=0
while(j< frutasyverduras.length){
    console.log(frutasyverduras[j]);
    j=j+1;
}

function totallista(lista){
    return lista.length;
}

function esonoes(lista,elemento){
    for(var i=0; i<lista.length; i++){
        if(lista[i] == elemento){
            return true;
        }
    }
    return false;
}

function elimina(lista, elemento){
    for(var i=0; i<lista.length; i++){
        if(lista[i]== elemento){
            
        }
    }
                                      
}


function mayor(lista){
     var mayor = lista[0];

     for(var i=0; i<lista.length; i++){
        if(mayor<lista[i]){
            mayor = lista [i];
        }
     }
     return mayor;
}
