// Creamos una funcionalidad para recoger los datos del formulario de la página,
// y añadirlos a un array de FormField

let newFieldsArray = [];

try {
  const createFieldForm = document.getElementById("createFieldForm");

  // Escuchamos el "click" de addFieldToCreateForm, para crear una nueva instancia de FormField
  // y añadirla al array
  document.getElementById("addFieldToCreateForm").addEventListener("click", () => {
    const type = document.getElementById("type").value;
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const placeholder = document.getElementById("placeholder").value;
    const required = document.getElementById("required").value === "true";
    const label = document.getElementById("label").value;
    const className = document.getElementById("className").value;

    // Validamos para comprobar que los campos no estén vacíos
    if (!type || !name || !id || !placeholder || !label || !className) {
      console.log("Fields cannot be empty");
      alert("Ups, fields cannot be empty");
      return; // No crear el campo si hay campos vacíos
    }

    const newField = new FormField(type, name, id, placeholder, required, label, className);
    // console.log(newField);

    alert(`New field added ${JSON.stringify(newField)}`);

    newFieldsArray.push(newField);

    createFieldForm.reset();

    console.log(newFieldsArray);
  });
} catch (e) {
  console.log(`New field forms should de an instance of "FormField" class`);
}

try {
  //  Escuchamos el "click" del botón para generar el formulario
  document.getElementById("generarForm").addEventListener("click", () => {
    const formName = "NewFormCreated";
    const formContainer = document.getElementById("createFieldForm-htmlcode");

    formContainer.innerHTML = "";
    console.log(`Test: ${newFieldsArray} `);

    // Creamos el formulario dinámico y añadirlo al contenedor
    const formJS = FormLibrary.createFormJS(formName, newFieldsArray, (form, formData) => {
      formContainer.appendChild(form);

      console.log("Datos del formulario:", JSON.stringify(form));
    });
  });
} catch (e) {
  console.log(`Ups, an erroe has happened. Error Message: ${e}`);
}
