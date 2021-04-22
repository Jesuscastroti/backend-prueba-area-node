//Consulta para Listar las categorias
export const getCategorias = `SELECT * FROM categorias `;
//Consulta para agregar categoria
export const addCategoria = `INSERT INTO categorias (nombre_categoria)
VALUES ($1)`;


