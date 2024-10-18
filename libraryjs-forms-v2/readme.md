# Libreria JS - Formularios
## Descripción

Desarrollo de una librería en JavaScript, para generar formularios con campos dinámicos.

## Técnologias utilizadas:

JavaScript Vanilla

## Funcionalidades:

Librería en js para generar un formularios con campos dinámicos.
La librería se ejecuta a partir de un objeto/función en un Namespace propio en window.
createFormJS(formId, [field1, field2, ...], callback). Función que genera un formulario con campos dinámicos
fieldX. Cada parámetro o argumento field debe ser un objeto con las siguientes opciones:

```
{ type : "text" // String. Tipos de input: text / number / email...
name : "phone" // String. Atributo "name" del elemento
id : "campo_telefono" // String. Id del elemento: #id
required : true // Boolean. SI el campo es requerido para el form: true | false }
```

Callback. Función que se ejecutará tras crear el formulario
Retorno. La función debe retornar un objeto con acceso al elemento formulario generado

## Ejemplo y modo de uso

- Abrimos el archivo index.html en el navegador

- Nos aseguramos de tener importada la librería. En este caso, podemos abrir la consola de comandos y ejecutar el código en la misma.
  Creamos un Array de objetos de la clase FormField (type, name, id, required), cada instancia corresponderá a un input del formulario que vamos a generar.
  Ej:

  ```
  const fields = [
  new FormField("text", "user", "user", "username", true, "username", "form-fielf-full"),
  new FormField("text", "email", "email", "email", true, "email", "form-fielf-full"),
  new FormField("password", "password1", "password1", "password", true, "Contraseña", "form-fielf-half"),
  new FormField("checkbox", "terms1", "check1", "", true, "acepto", "form-fielf-half"),
  new FormField("submit", "submit1", "submit1", "", false, "Enviar", "form-fielf-half"),
  ];
  ```

- Llamamos a la función createFormJS
  Ej:

  ```
  const formObject = FormLibrary.createFormJS(fields2, (form) => {
  document.body.appendChild(form); });
  ```

- La función nos devolverá un objeto con el formulario que acabamos de crear, tras ejecutar la función de callback.

## Realizada por:

Ángeles Córdoba
