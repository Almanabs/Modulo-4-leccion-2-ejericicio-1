class Vehiculo {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
}

class Tradicionales extends Vehiculo {
  constructor(marca, modelo, color, licencia, patente) {
    super(marca, modelo, color);
    this.licencia = licencia;
    this.patente = patente;
  }
}

class Express extends Tradicionales {
  constructor(marca, modelo, color, licencia, patente) {
    super(marca, modelo, color);
    this.licencia = licencia;
    this.patente = patente;
  }
}

class Premiun extends Tradicionales {
  constructor(marca, modelo, color, licencia, patente, aireAcondicionado) {
    super(marca, modelo, color);
    this.licencia = licencia;
    this.patente = patente;
    this.aireAcondicionado = aireAcondicionado;
  }
}

class Cargo extends Tradicionales {
  constructor(marca, modelo, color, licencia, patente, tipoEncomienda) {
    super(marca, modelo, color);
    this.licencia = licencia;
    this.patente = patente;
    this.tipoEncomienda = tipoEncomienda;
  }
}


let tradicionales = new Tradicionales(
  "Peugeot",
  "206",
  "verde",
  "B",
  "ABCD-69",
  "Si"
);

let express = new Express(
  "Peugeot",
  "206",
  "verde",
  "B",
  "ABCD-69",
  "Si"
);

let premiun = new Premiun(
  "Peugeot",
  "206",
  "verde",
  "B",
  "ABCD-69",
  "Si"
);

let cargo = new Cargo(
  "Peugeot",
  "206",
  "verde",
  "B",
  "ABCD-69",
  "Si"
);


console.log(tradicionales);
console.log(express);
console.log(premiun);
console.log(cargo);
 
// ejercicio 2
class Producto {
  constructor(id, precio, peso, tamano) {
    this.id = id;
    this.precio = precio;
    this.peso = peso;
    this.tamano = tamano;
  }
}

class Accesorios extends Producto {
  constructor(id, precio, peso, tamano, color, tipo, marca) {
    super(id, precio, peso, tamano);
    this.color = color;
    this.tipo = tipo;
    this.marca = marca;
  }
}

class Televisores extends Producto {
  constructor(id, precio, peso, tamano, marca, calidad, pulgadas, modelo) {
    super(id, precio, peso, tamano);
    this.marca = marca;
    this.calidad = calidad;
    this.pulgadas = pulgadas;
    this.modelo = modelo;
  }
}

class Consolas extends Producto {
  constructor(id, precio, peso, tamano, marca, modelo) {
    super(id, precio, peso, tamano);
    this.marca = marca;
    this.modelo = modelo;
  }
}
let accesorios = new Accesorios("001", "$200.000", "3 kg", "10x40cm", "sony", "PS4");
console.log(accesorios);
let televisores = new Televisores("001", "$200.000", "3 kg", "10x40cm", "sony", "PS4");
console.log(televisores);
let consola = new Consolas("001", "$200.000", "3 kg", "10x40cm", "sony", "PS4");
console.log(consola);

// ejercicio 3
class Sum {
  constructor(base) {
    this.base = base;
    this.current = base;
    this.sum = base;
    console.log(`Base: ${this.base}`);
  }

  sumar() {
    this.current++;
    this.sum += this.current;
    console.log(`Current: ${this.current}`);
    console.log(`Sum: ${this.sum}`);
  }
}

let base = Math.floor(Math.random() * 10) + 1;
let sumatoria = new Sum(base);