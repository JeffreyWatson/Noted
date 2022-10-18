import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"

class NotesService {

    createNote(data) {
        let note = new Note(data)
        console.log(note)
        appState.notes = [...appState.notes, note]
        console.log(appState.notes)
        saveState('notes', appState.notes)
    }

}

export const notesService = new NotesService()