import express from "express"
import AuthorController from "../controllers/authorController.js";
import authMidlleware from "../middleware/authMidlleware.js";

const routes = express.Router();

/**
 * @Swagger
 * tags: [Autores]
 *  name: Autores
 *  description: Endpoints autores
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

routes.get("/authors", authMidlleware,AuthorController.getAllAuthor);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

routes.post("/authors", authMidlleware,AuthorController.createAuthor);

/**
 * @swagger
 * /authors:
 *   get:id:
 *     summary: Lista por id o autor
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

routes.get("/authors/:id", authMidlleware,AuthorController.getAuthorById);

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

routes.get("/authors/search/:name", authMidlleware,AuthorController.searchAuthorByName)

/**
 * @swagger
 * /authors:
 *   delete:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */


routes.delete("/authors/:id", authMidlleware,AuthorController.deletedAuthor);

/**
 * @swagger
 * /authors:
 *   put:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

routes.put("/authors/:id", authMidlleware,AuthorController.updateAuthor);

export default routes;
