class FormField {
  constructor(type, name, id, required) {
    this.type = this.validate(type, "string"); // Tipos de input: text / number / email...
    this.name = this.validate(name, "string"); // Atributo "name" del elemento
    this.id = this.validate(id, "string"); // Id del elemento: #id
    this.required = this.validate(required, "boolean"); // Si el campo es requerido para el form: true | false
  }

  /**
   * Función para validar el tipo de dato
   * @param {string} arg
   * @param {string} type
   * @returns {string}
   */
  validate(arg, type) {
    if (typeof arg !== type) {
      throw new Error(`${arg} type should be "${type}"`);
    } else return arg;
  }
}
