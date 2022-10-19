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

function _drawBody(id) {
    let notes = appState.notes
    let template = ''
    notes.find(n => template += n.Template1)
    // @ts-ignore
    document.getElementById('body').innerHTML = template
}

function _drawActive() {
    setHTML('body', appState.activeNote.Template1)
}

export class NotesController {

    constructor() {
        appState.on('notes', _drawNotes)
        appState.on('active-note', _drawActive)
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
        try {
            debugger
            _drawBody(id)
            let textarea = window.event?.target
            console.log('drawing body', textarea);
            // @ts-ignore
            notesService.editBody(textarea.value, id)
        } catch (error) {
            console.error("editing a note", error)
        }
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
            debugger
            notesService.setActive(id)
        } catch (error) {
            console.error("creating a note", error)

        }
    }

}