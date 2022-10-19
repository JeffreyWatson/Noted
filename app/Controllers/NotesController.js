import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawNotes() {
  let notes = appState.notes
  let template = ''
  notes.forEach(n => template += n.Template)
  // @ts-ignore
  document.getElementById('notes').innerHTML = template
}

function _drawBody() {
  let notes = appState.notes
  let template = ''
  notes.find(n => template += n.Active)
  // @ts-ignore
  document.getElementById('active-note').innerHTML = template
}

function _drawActive() {
  setHTML('active-note', appState.activeNote.Active)
}

export class NotesController {

  constructor() {
    appState.on('notes', _drawNotes)
    // appState.on('active-note', _drawActive)
    _drawNotes()

  }
  createNote() {
    try {
      window.event?.preventDefault()
      let form = window.event?.target
      let data = getFormData(form)
      console.log("notes getting created in my controller", data)
      notesService.createNote(data)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error("creating a note", error)
    }
  }

  editBody(id) {
    debugger
    let textarea = window.event?.target
    console.log('drawing body', appState.activeNote);
    // @ts-ignore
    notesService.editBody(textarea.value, id)
    _drawBody()
  }

  async deleteNote(id) {
    // @ts-ignore
    if (await Pop.confirm('Delete note?', 'Are you sure', 'Yes')) {
      notesService.deleteNote(id)
      Pop.toast('Deleting Note', 'success')
    }
  }

  setActive(id) {
    try {
      notesService.setActive(id)
      this.editBody(id)
    } catch (error) {
      console.error("creating a note", error)
    }
  }

}