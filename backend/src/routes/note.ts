import express from "express";
import * as Notescontroller from "../controllers/note";
export const router = express.Router();

router.get("/", Notescontroller.getNotes);
router.get("/:id", Notescontroller.getNote);
router.post("/", Notescontroller.createNote);
router.patch("/:id", Notescontroller.updateNote);
router.delete("/:id", Notescontroller.deletNote);

// export default router;
