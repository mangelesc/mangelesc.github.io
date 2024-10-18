/**
 * Librería en JavaScript Vanilla
 * Su principal funcionalidad es generar un formulario con campos dinámicos.
 * @returns {object}
 */

window.FormLibrary = (() => {
  /**
   * Función que genera un formulario con campos dinámicos.
   * @param {Array} fields
   * @param {function} callback
   * @returns {object}
   */

  const createFormJS = (fields, callbackFormJS) => {
    //Realizamos validaciones de datos
    // console.log(!Array.isArray(fields));
    // console.log(fields);
    try {
      if (!Array.isArray(fields)) {
        throw new Error(`"fields" type should be an array`);
      }

      if (typeof callbackFormJS !== "function") {
        throw new Error(`"callbackFormJS" should be a function`);
      }

      // Comprobamos que fields es un array

      // Creamos elemento "form"
      const formJS = document.createElement("form");

      // Iteramos por cada campo, para crear el elemento "input"
      fields.forEach((field) => {
        if (!(field instanceof FormField)) {
          throw new Error('Elements in "fields" array should be an instance of FormField class');
        }

        // Creamos el formulario en código HTML
        const formInput = document.createElement("input");
        formInput.type = field.type;
        formInput.name = field.name;
        formInput.id = field.id;
        formInput.required = field.required;

        // Añadimos los elementos HTML creados al documento
        formJS.appendChild(formInput);
      });

      callbackFormJS(formJS);

      // Añadimos formJS a un objeto para su retorno
      const formObject = {
        formId: formJS.id,
        fields: fields.map((field) => ({
          type: field.type,
          name: field.name,
          id: field.id,
          required: field.required,
        })),
      };

      console.log(`${JSON.stringify(formObject)} is being correctly created`);

      return formObject;
    } catch (e) {
      console.log(`Ups, something went wrong!! Error: ${e}`);
    }
  };

  /**Ejemplo de funcion tras crear el formulario
   * Imprime los datos enviados a través del formulario, en formato json.
   * @param {Array} fields
   */
  const callbackFormJS = () => {};

  return {
    createFormJS,
  };
})();
