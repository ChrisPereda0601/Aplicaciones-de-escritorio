const express = require('express');
const router = express.Router();
const controller = require('./../controladores/tareas');
/**
 * @swagger
 * /tareas:
 *  post:
 *    description: Crear una nueva tarea
 *    parameters: 
 *      - in: body
 *        name: Tarea
 *        description: Objeto de la tarea que se desea crear
 *        schema:
 *          type: object
 *          properties:
 *            _id:
 *              type: string
 *            titulo:
 *              type: string
 *              description: Nombre de la tarea
 *            status:
 *              type: string
 *              description: Es una tarea nueva, actualizada, pendiente o eliminada
 *            fecha:
 *              type: string
 *              description: Formato "MM-DD-YYYY"
 *            descripcion:
 *              type: string
 *              description: Requerimientos de la tarea         
 *    responses:
 *      200:
 *        description: Tarea creada correctamente
 *      400:
 *        description: No se ha podido crear la tarea
 */
router.post('', express.json(), controller.CrearTarea);
/**
 * @swagger
 * /tareas:
 *  get:
 *    description: Lista de todas las tareas
 *    responses: 
 *      200: 
 *        description: Lista de tareas
 */
router.get('', controller.listarTarea);
/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: Actualizar una tarea existente
 *    parameters: 
 *      - in: body
 *        name: Tarea
 *        description: Objeto de la tarea que se desea actualizar
 *        schema:
 *          type: object
 *          properties:
 *            _id:
 *              type: string
 *            titulo:
 *              type: string
 *              description: Nombre de la tarea
 *            status:
 *              type: string
 *              description: Es una tarea nueva, actualizada, pendiente o eliminada
 *            fecha:
 *              type: string
 *              description: Formato "MM-DD-YYYY"
 *            descripcion:
 *              type: string
 *              description: Requerimientos de la tarea         
 *    responses:
 *      200:
 *        description: Tarea actualizada correctamente
 *      400:
 *        description: No se ha podido actualizar la tarea
 */
router.put('/:id', express.json(), controller.ActualizarTarea);
/**
 * @swagger
 * /tareas/{_id}:
 *   get:
 *     summary: Regresar tarea especifica.
 *     parameters:
 *       - in: path
 *         name: "id"
 *         description: Ver tarea con este id.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea mostrada
 *       404:
 *         description: No existe una tarea con este id
 *       400:
 *         description: Error en la peticion
 */
router.get('/:id', controller.verTarea);
/**
 * @swagger
 * /tareas/{_id}:
 *   delete:
 *     summary: Eliminar tarea
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id de la tarea que se quiere eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Eliminacion exitosa
 *       404:
 *         description: No existe una tarea con el id proporcionado
 *       400:
 *         description: Error en la peticion
 */
router.delete('/:id', controller.eliminarTarea);

module.exports = router;