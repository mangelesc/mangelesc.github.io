/**
 * Librería en JavaScript Vanilla
 * Su principal funcionalidad es generar un formulario con campos dinámicos.
 * @returns {object}
 */

window.FormLibrary = (() => {
  /**
   * Función que genera un formulario con campos dinámicos.
   * @param {string} formName
   * @param {Array} fields
   * @param {function} callback
   * @returns {HTMLFormElement}
   */
  const createFormJS = (formName, fields, callbackFormJS) => {
    //Realizamos validaciones de datos
    // console.log(!Array.isArray(fields));
    // console.log(fields);

    try {
      if (!formName || typeof formName !== "string") {
        throw new Error(`"formName" should be an string`);
        return null;
      }

      if (!Array.isArray(fields)) {
        throw new Error(`"fields" type should be an array`);
        return null;
      }

      if (typeof callbackFormJS !== "function") {
        throw new Error(`"callbackFormJS" should be a function`);
        return null;
      }

      // Creamos elemento "form"
      const formJS = document.createElement("form");
      formJS.className = "createdForm-main";
      formJS.id = formName;

      // Iteramos por cada campo, para crear el elemento "input"
      fields.forEach((field) => {
        if (!(field instanceof FormField)) {
          throw new Error("Elements in fields array should be an instance of FormField class");
        }

        // Formulario en código HTML
        // Envolvemos en un span
        const fieldWrapper = document.createElement("div");
        fieldWrapper.className = "createdForm-div";

        //Input
        const formInput = document.createElement("input");
        formInput.type = field.type;
        formInput.name = field.name;
        formInput.id = field.id;
        formInput.required = field.required;
        formInput.placeholder = field.placeholder;
        formInput.className = field.className;

        //Label Input
        const formLabel = document.createElement("label");
        formLabel.innerText = `${field.name}: `;
        formLabel.setAttribute("for", field.id);

        // Añadimos los elementos HTML creados al documento
        fieldWrapper.appendChild(formLabel);
        fieldWrapper.appendChild(formInput);

        formJS.appendChild(fieldWrapper);

        // console.log(formJS.id);
      });

      // Validamos función callbackFormJS
      if (typeof callbackFormJS === "function") {
        callbackFormJS(formJS);
      }

      const formJSObject = {
        formId: formJS.id,
        fields: fields.map((field) => ({
          type: field.type,
          name: field.name,
          id: field.id,
          required: field.required,
          placeholder: field.placeholder,
          className: field.className,
        })),
      };

      console.log(`Form is being correctly ${JSON.stringify(formJSObject)} created `);

      return formJSObject;
    } catch (e) {
      console.log(`Ups, something went wrong!! Error: ${e}`);
      return null;
    }
  };

  /**Ejemplo de funcion tras crear el formulario
   * Imprime los datos enviados a través del formulario, en formato json.
   * @param {Array} fields
   */
  const callbackFormJS = (formJS, htmlElementId) => {
    try {
      const formId = formJS.id;
      const htmlElementIdTarget = htmlElementId;

      htmlElementIdTarget.appendChild(formJS);

      console.log(formJS);

      document.getElementById(formId).addEventListener("submit", (event) => {
        // preventDefault - Para evitar el comportamiento por defecto de enviar el formulario y recargar la página
        event.preventDefault();

        // Capturamos los datos del formulario enviado en el evento submit
        const formData = new FormData(event.target);

        const formObject = {};

        // Convertimos FormData en un objeto
        formData.forEach((value, key) => {
          formObject[key] = value;
        });

        // Transformamos el formObject a JSON (Los preparamos para enviarlos a algún posible endpoint)
        const json = JSON.stringify(formObject);
        console.log(`JSON generado: ${json}`);

        alert(`JSON generado: ${json}`);

        event.target.reset();

        return formJS;
      });
    } catch (e) {
      console.log(`Ups, something went wrong!! Error: ${e}`);
    }
  };

  return {
    createFormJS,
    callbackFormJS,
  };
})();
