import {pool} from "./database.js";

class LibroController {

    async getAll(req, res) {
        try {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result); 
        } catch (error) {
            console.log('Error al obtener los libros', error);
        }
    }
    
    async getOne(req, res) {
        try {
        const libro = req.body;
        const { id } = libro;
        const [result] = await pool.query('SELECT * FROM libros WHERE id=(?)', [id]);

        if (result.length === 0) {
            res.json("Libro no encontrado");
        } else {
            res.json(result[0]);
        }
        } catch (error) {
            console.log('Error al obtener el libro', error);
        }
    }

    async add(req, res) {
        try {
        const libro = req.body;
        const [result] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
        res.json({"Id insertado": result.insertId});
        } catch (error) {
            console.log('Error al añadir el libro', error);
        }
    }

    async delete(req, res) {
        try {
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM libros WHERE ISBN=(?)`, [libro.ISBN]);
        res.json({"Registros eliminados": result.affectedRows});
        } catch (error) {
            console.log('Error al eliminar el libro', error);
        }
    }

    async update(req, res) {
        try {
        const libro = req.body;
        const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
        res.json({"Registros actualizados": result.changedRows });
        } catch (error) {
            console.log('Error al editar el libro', error);
        }
    }

}

export const libro = new LibroController();