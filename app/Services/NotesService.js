import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"

class NotesService {

  createNote(data) {
    let note = new Note(data)
    appState.notes = [...appState.notes, note]
    console.log(data)
    saveState('notes', appState.notes)
  }

  editBody(data, id) {
    let note = appState.notes.find(t => t.id == id)
    // @ts-ignore
    note.body = data
    appState.notes = appState.notes
  }

  deleteNote(id) {
    appState.notes = appState.notes.filter(n => n.id != id)
    saveState('notes', appState.notes)
  }

}

export const notesService = new NotesService()