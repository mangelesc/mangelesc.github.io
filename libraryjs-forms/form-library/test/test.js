// Ejemplo de Formulario 1

// Definimos algunos campos del formulario
const fields2 = [
  new FormField("text", "username", "username", true),
  new FormField("email", "email", "email", true),
  new FormField("password", "password", "password", true),
  new FormField("submit", "submit", "submit", false),
];

// Llamamos a la función createFormJS
const formObject2 = FormLibrary.createFormJS(fields2, (form) => {
  // Añadimos el formulario al body del documento
  const htmlDiv = document.getElementById("formTest");
  htmlDiv.appendChild(form);
});

// console.log(formObject2);

// // Ejemplo de Formulario 2 - Usando callbackFormJS
// const fields3 = [
//   new FormField("text", "_username", "username", true),
//   new FormField("email", "_email", "email", true),
//   new FormField("password", "_password", "password", true),
//   new FormField("submit", "_submit", "submit", false),
// ];

// // Llamamos a la función createFormJS
// const formObject3 = FormLibrary.createFormJS(fields3, (formJS) => {
//   const htmlDiv = document.getElementById("formTest");

//   FormLibrary.callbackFormJS(formJS, htmlDiv);
// });
