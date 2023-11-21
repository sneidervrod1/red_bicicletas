var Bicicleta = function (id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toSring = function (){
    return 'id: ' + this.id + "| color" +  this.color;

}
Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if(aBici){
        return aBici
    }else{
        throw new Error(`No existe una bici con ese id ${aBiciId}`);
    }
}

Bicicleta.removeById = function(aBiciId){
    for(var i =0; i< Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
        }
    } 
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);

}

var a = new Bicicleta(1, 'rojo', 'urbana', [4.583248, -7.158788])
var b = new Bicicleta(2, 'Azul', 'montana', [4.577088, -7.155054])

Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;