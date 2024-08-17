Método getOne: para obtener un determinado libro por ID se deberá modificar la URL en Postman y agregar "/:" a la URL original. Ejemplo: "http://localhost:3000/libros" -----> "http://localhost:3000/libros/:" 
Una vez modificada la URL, se deberá especificar el ID del libro del cual se desea obtener la información en el apartado "Body". Por ejemplo: {"id": 2}. 
Se modificó el tipo de dato de la variable "año_publicacion" de DATE a YEAR. Esto debido a que el tipo DATE requiere especificar la fecha y hora exacta actual, al contrario del tipo YEAR, que solamente detalla el año.
