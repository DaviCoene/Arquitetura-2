import express from "express"
import AuthorController from "../controllers/authorController.js";
import authMidlleware from "../middleware/authMidlleware.js";

const routes = express.Router();

routes.get("/authors", authMidlleware,AuthorController.getAllAuthor);
routes.post("/authors", authMidlleware,AuthorController.createAuthor);
routes.get("/authors/:id", authMidlleware,AuthorController.getAuthorById);
routes.get("/authors/search/:name", authMidlleware,AuthorController.searchAuthorByName)
routes.delete("/authors/:id", authMidlleware,AuthorController.deletedAuthor);
routes.put("/authors/:id", authMidlleware,AuthorController.updateAuthor);


export default routes;


