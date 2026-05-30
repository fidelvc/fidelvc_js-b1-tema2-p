//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/**
  -- CASTELLANO
  -- EJERCICIO 2.5.1 ENUNCIADO:
	Dada la clase Planet (que define planetas del Sistema Solar) y que se muestra más abajo con propiedades y un método de instancia y
	de clase ya definidos nos piden lo siguiente:

	1. Definir en 8 constantes (a las que nombraremos myPlanet1, myPlanet2, ..., myPlanet8) los 8 objetos Planet del sistema solar que se definen en el ejercicio 1 de la Unidad 1 del tema 1, usando esta nueva clase.
	2. Obtener por pantalla el nombre de la estrella de un planeta usando el método de instancia nameOftheStar.
	3. De los 8 planetas definidos en constantes, obtener en un nuevo Array los que poseen anillos usando el método de clase planetsWithRings.
	4. Mostrar por pantalla la distancia entre dos planetas usando el método de clase distanceBetweenPlanets.

  -- CATALÀ
  -- EXERCICI 2.5.1 ENUNCIAT:
	Donada la classe Planet (que defineix planetes del Sistema Solar) i que es mostra més avall amb propietats i mètodes d'instància i
	de classe ja definits ens demanen el següent:

	1. Definir en 8 constants (què anomenarem myPlanet1, myPlanet2, ..., myPlanet8) els 8 objectes Planet del sistema solar que es defineixen a l'exercici 1 de la Unitat 1 del tema 1, usant aquesta nova classe.
	2. Definir en una constant anomenada [starName] el nom de l'estrella d'un planeta usant el mètode d'instància nameOftheStar.
	3. Dels 8 planetes definits en constants, obtenir en un nou Array que emmagatzenarem a una constant anomenada [PWR] els que tenen anells usant el mètode de classe planetsWithRings.
	4. Definir en una constant anomenada [venusToSarturn] la distància entre dos planetes usant el mètode de classe distanceBetweenPlanets.
*/
class Planet {
  constructor(p_name, p_distanceToSun, p_hasRings, p_diameter) {
    this.name = p_name;
    this.distanceToSun = p_distanceToSun;
    this.hasRings = p_hasRings;
    this.diameter = p_diameter;
  }

  //Instance methods
  nameOftheStar() {
    return "the Sun";
  }
  //Class methods
  static distanceBetweenPlanets(planet1, planet2) {
    return Math.abs(planet1.distanceToSun - planet2.distanceToSun);
  }
  static planetsWithRings(planets) {
    let planetsRingsArray = new Array();
    planets.forEach(function (planet) {
      if (planet.hasRings) {
        planetsRingsArray.push(planet);
      }
    });
    return planetsRingsArray;
  }
}

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// TODO: 1. Definir 8 constantes (myplanet1...) basado en el ejercicio 1.1.1, usando una nueva clase.
// TODO: 2. Obtener el nombre de la estrella de un planeta usando el método de instancia nameOftheStart.
// TODO: 3. Filtrar aquellos planetas que posen anillos usando el método de clase planetsWithRings.
// TODO: 4. Obtener la distancia entre dos planetas usando el método de clase distanceBetweenPlanets.

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES,
 * if you run this code outside of this environment,
 * please comment or remove the following lines
 */
export function tests() {
  return [
    Planet,
    myPlanet1,
    myPlanet2,
    myPlanet3,
    myPlanet4,
    myPlanet5,
    myPlanet6,
    myPlanet7,
    myPlanet8,
    starName,
    PWR,
    venusToSarturn,
  ];
}
