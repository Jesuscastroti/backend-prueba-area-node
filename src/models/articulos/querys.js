//Listado de articulos
export const getArticulos = `SELECT * FROM articulos ORDER BY id DESC`;
//Consulta para agregar articulos
export const addArticulos = `INSERT INTO articulos (numero_registro,nombre,descripcion)
VALUES ($1,$2,$3)`;
//Consulta para actualizar categoria
export const editArticulos = `UPDATE articulos SET numero_registro=$1,nombre=$2,descripcion=$3 WHERE id=$4`;
//Consulta para eliminar categoria
export const deleteArticulos = "DELETE FROM articulos WHERE id=$1";
// Consulta categorias por id
export const getCategoriasId = `SELECT * FROM articulos WHERE id=$1`;
