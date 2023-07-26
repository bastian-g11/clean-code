import { Vehicle } from './03-liskov-applied-b';
import { Tesla, Audi, Toyota, Honda } from './03-liskov-applied-b';

(() => {
  // Ahora esta funcion tolera cualquier clase que sea subclase de Vehicle (cumple LSP)
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });

    /** Si bien ya se cumplia el LSP, ahora no se cumple el OCP ya que para que apareciera en consola
     * debia añadir el carro a los ifs, por lo que se opta por la implementación de arriba que respeta ambos*/
    // for (const car of cars) {
    // if (car instanceof Tesla) {
    //   console.log('Tesla', car.getNumberOfTeslaSeats());
    //   continue;
    // }
    // if (car instanceof Audi) {
    //   console.log('Audi', car.getNumberOfAudiSeats());
    //   continue;
    // }
    // if (car instanceof Toyota) {
    //   console.log('Toyota', car.getNumberOfToyotaSeats());
    //   continue;
    // }
    // if (car instanceof Honda) {
    //   console.log('Honda', car.getNumberOfHondaSeats());
    //   continue;
    // }
    // }
  };

  /** Se viola el principio de Liskov, porque si intentamos agregar algún otro tipo de carro
   * no podríamos añadirlo ya que se viola la interfaz definida en la línea 4. Además, se viola el principio
   * Open and Close, ya que para añadir un nuevo tipo carro habría que ir y modificar el archivo B, modificar
   * la línea 4 y agregar un if adicional para que acepte la instancia del nuevo carro.
   */
  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
