//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/**
  -- CASTELLANO
  -- EJERCICIO 2.5.2 ENUNCIADO:
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.1, ampliar la definición de la clase "Car" que representará los distintos coches que se venden
	en un concesionario, de manera que podamos cubrir las siguientes nuevas funcionalidades:
	- Se pretende implementar una nueva funcionalidad (compareAntiguaty) en donde, dados dos vehículos, se nos devuelva como resultado el vehículo más antiguo
	(en base a la propiedad year).
	- Tambien es necesario saber, dado un Array que contenga una serie de vehículos, cuál es el de mayor cilindrada (especificada en la propiedad displacement)
	con un nuevo método llamado maxDisplacement.
	- Así mismo, nos piden, con el fin de poder comparar la potencia de los coches clásicos del concesionario con las potencias de los actuales coches eléctricos
	un método (al que llamaremos cv2kw) que nos devuelva la potencia en kW (KiloWatts) a partir de la potencia en CV (Caballos) del vehículo
  (Nota:la equivalencia es 1 CV = 0,736 kW)

  En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
  Finalmente, crea almenos 3 objetos de la clase Car y haz 3 llamadas a estos nuevos métodos.

  -- CATALÀ
  -- EXERCICI 2.5.2 ENUNCIAT:
	Se'ns demana, basant-nos en tot allò definit a l'exercici 2.3.1, ampliar la definició de la classe "Car" que representarà els diferents cotxes que es venen
	en un concessionari, de manera que puguem cobrir les noves funcionalitats següents:
	- Es pretén implementar una nova funcionalitat (compareAntiguaty) on, donats dos vehicles, se'ns torni com a resultat el vehicle més antic
	(en base a la propietat year).
	- També cal saber, donat un Array que contingui una sèrie de vehicles, quin és el de major cilindrada (especificada a la propietat displacement)
	amb un nou mètode anomenat maxDisplacement.
	- Així mateix, ens demanen, per tal de poder comparar la potència dels cotxes clàssics del concessionari amb les potències dels actuals cotxes elèctrics
	un mètode (al qual anomenarem cv2kw) que ens retorni la potència en kW (KiloWatts) a partir de la potència en CV (Cavalls) del vehicle
  (Nota: l'equivalència és 1 CV = 0,736 kW)

	En base a la funcionalitat sol·licitada haureu de decidir quins mètodes definiu com a Mètodes d'Instància i quins definiu com a Mètodes de Classe.
	Finalment, crea almenys 3 objectes de la classe Car i fes 3 crides a aquests nous mètodes.
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:

class Car {
  constructor(brand, model, displacement, horsePower, year) {
    this.brand = brand;
    this.model = model;
    this.displacement = displacement;
    this.horsePower = horsePower;
    this.year = year;
  }

  //feat: 1. compareAntiguaty(c1, c2) -> oldestone.

  static compareAntiguaty(c1, c2) {
    if (c1.year == c2.year) return "Tienen la misma antiguedad";

    return c1.year < c2.year ? c1 : c2;
  }

  // feat: 2. Obtener el vehículo de mayor cilindrada

  static maxDisplacement(cars) {
    let theMost = cars[0];
    for (let i = 0; i < cars.length; i++) {
      if (theMost.displacement <= cars[i].displacement) theMost = cars[i];
    }
    return theMost;
  }

  // feat: 3. comparar la potencia de los coches clásicos con los coches eléctricos

  cv2kw() {
    return this.horsePower * 0.736;
  }

  // Implementar un setter: carAntiguaty, que nos permitirá definir el valor de la propiedad "year" a partir de los años de antiguedad del vehículo (2023 - antiguedad)
  set carAntiguaty(antiguedad) {
    this.year = 2023 - antiguedad;
  }

  // Implementar un getter: getCarDescription, que nos permitirá obtener la marca, modelo y cilidrada del vehículo directamente.
  get getCarDescription() {
    return `${this.brand} ${this.model} ${this.displacement}cc`;
  }
}

const myCar1 = new Car("Ford", "Mustang Boss 429", 7000, 375, 1999);
const myCar2 = new Car("BMW", "520d", 3000, 136, 2002);
const myCar3 = new Car("Mercedes-Benz", "280 SLC", 2323, 136, 1979);

console.log(Car.compareAntiguaty(myCar1, myCar3));
//console.log(Car.maxDisplacement([myCar1, myCar2, myCar3]));
//console.log(myCar1.cv2kw());
/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES,
 * if you run this code outside of this environment,
 * please comment or remove the following lines
 */
export function tests() {
  return Car;
}
