class FormField {
  constructor(type, name, id, placeholder, required, label, className) {
    this.type = this.validate(type, "string"); // Tipos de input: text / number / email...
    this.name = this.validate(name, "string"); // Atributo "name" del elemento
    this.id = this.validate(id, "string"); // Id del elemento: #id
    this.placeholder = this.validate(placeholder, "string"); // label del elemento
    this.required = this.validate(required, "boolean"); // Si el campo es requerido para el form: true | false
    this.label = this.validate(label, "string"); // label para añadir al elemento
    this.className = this.validate(className, "string"); // Clase css del elemento
  }

  /**
   * Función para validar el tipo de dato
   * @param {string} type
   * @param {string} callback
   * @returns {string}
   */
  validate(arg, type) {
    if (typeof arg !== type) {
      throw new Error(`${arg} type should be "${type}"`);
    } else return arg;
  }
}
