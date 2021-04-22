//Consulta para Listar las categorias
export const getCategorias = `SELECT * FROM categorias  ORDER BY id DESC`;
//Consulta para agregar categoria
export const addCategoria = `INSERT INTO categorias (nombre_categoria)
VALUES ($1)`;
//Consulta para actualizar categoria
export const editCategoria = `UPDATE categorias SET nombre_categoria=$1 WHERE id=$2`;
//Consulta para eliminar categoria
export const deleteCategoria = "DELETE FROM categorias WHERE id=$1";
//Consultar categorias por id
export const getCategoriasId = `SELECT * FROM categorias WHERE id=$1`;