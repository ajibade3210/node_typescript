export interface CreateNoteBody {
  title?: string;
  text?: string;
}

export interface UpdateNoteParams {
  id?: string;
}

export interface UpdateNoteBody {
  title?: string;
  text?: string;
}