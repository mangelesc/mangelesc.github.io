// Ejemplo de Formulario 1
const formName1 = "FormJS1";

const fields = [
  new FormField("text", "user", "user", "username", true, "username", "form-fielf-full"),
  new FormField("email", "email", "email", "email", true, "email", "form-fielf-full"),
  new FormField("password", "password1", "password1", "password", true, "Contraseña", "form-fielf-half"),
  new FormField("checkbox", "terms1", "check1", "", true, "acepto", "form-fielf-half"),
  new FormField("submit", "submit1", "submit1", "", false, "Enviar", "form-fielf-half"),
];

const htmlElementId = document.getElementById("examples-section-addedJs");

const form1 = FormLibrary.createFormJS(formName1, fields, (formJS) => {
  FormLibrary.callbackFormJS(formJS, htmlElementId);
});
