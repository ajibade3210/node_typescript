import { RequestHandler } from "express";
import NoteModel from "../models/note";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import {
  CreateNoteBody,
  UpdateNoteBody,
  UpdateNoteParams,
} from "../types/notes";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    // throw Error("Baing...");
    const notes = await NoteModel.find().exec();
    return res.status(200).send(notes);
  } catch (error) {
    return next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      throw createHttpError(400, "Invalid note id");
    const note = await NoteModel.findById(id);
    if (!note) throw createHttpError(400, "Note not found");
    return res.status(200).send({ note });
  } catch (error) {
    return next(error);
  }
};

export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  try {
    const { title, text } = req.body;
    if (!title) throw createHttpError(400, "Note must have a title");
    const newNote = await NoteModel.create({ title, text });
    return res.status(201).send({ newNote });
  } catch (error) {
    return next(error);
  }
};

// params, res body, req body, url perm params
export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;

    if (!mongoose.isValidObjectId(id))
      throw createHttpError(400, "Invalid note id");
    if (!title) throw createHttpError(400, "Note must have a title");

    const note = await NoteModel.findById(id);
    if (!note) throw createHttpError(404, "Note not found");
    note.title = title;
    note.text = text;
    const updatedNote = await note.save();

    return res.status(200).send({ updatedNote });
  } catch (error) {
    return next(error);
  }
};

export const deletNote: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id))
      throw createHttpError(400, "Invalid note id");

    const note = await NoteModel.findById(id).exec();
    if (!note) throw createHttpError(404, "Note not found");
    await note.deleteOne({ id });
    return res.status(204).send({});
  } catch (error) {
    return next(error);
  }
};
