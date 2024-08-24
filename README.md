
	1. Método getOne: para obtener un determinado libro por ID se deberá modificar la URL en 
Postman y agregar "/:" a la URL original. Ejemplo: 
"http://localhost:3000/libros" -----> "http://localhost:3000/libros/:" 
Una vez modificada la URL, se deberá especificar el ID del libro del cual se desea obtener la 
información en el apartado "Body". Por ejemplo: {"id": 2}. 
Este modificación se debe realizar únicamente con el método "getOne", para el resto de métodos
(getAll, add, delete, update) se debe eliminar dicho "/:" al final de la URL declarada en
Postman.

	2. Se modificó el tipo de dato de la variable "año_publicacion" de DATE a YEAR. 
Esto debido a que el tipo DATE requiere especificar la fecha y hora exacta actual, al contrario 
del tipo YEAR, que solamente detalla el año.

	3. Para utilizar el método "update", se debe especificar el "id" del elemento a modificar
al final de la sentencia. Ejemplo:
{
	"nombre": "-",
	"autor": "-",
	"categoria": "-",
	"año_publicacion": AAAA,
	"ISBN": "1234567890123"
	"id": (id del elemento a modificar)
}
