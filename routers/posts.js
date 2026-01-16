//Importo express
import express from "express";

//Importo postController
import postController from "../controllers/postController.js";

const router = express.Router();


//OPERAZIONE CRUD
//Metto tutti gli endpoint qui

// Lettura di tutti i post dei cani - INDEX
router.get("/", postController.index);

// Dettagli di un singolo post (cane) - SHOW
router.get("/:id", postController.show);

// Creare un nuovo tipo di post (cane) - STORE
router.post("/", postController.store);

// Modificare un post di cane esistente - UPDATE
router.put("/:id", postController.update);

// Modificare solo alcuni dati di un post di cane esistente - MODIFY
router.patch("/:id", postController.modify);

// Cancellare un post di cane esistente - DESTROY
router.delete("/:id", postController.destroy);


//export router
export default router;