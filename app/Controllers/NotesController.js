import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"


function _drawNotes() {
  let notes = appState.notes
  let template = ''
  notes.forEach(n => template += n.Template)
  // @ts-ignore
  document.getElementById('notes').innerHTML = template
}


export class NotesController {

  constructor() {
    appState.on('notes', _drawNotes)
    _drawNotes()

  }
  createNote() {
    try {
      window.event?.preventDefault()
      const form = window.event?.target
      let data = getFormData(form)
      console.log("notes getting created in my controller", data)
      notesService.createNote(data)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error("creating a note", error)
    }
  }

}