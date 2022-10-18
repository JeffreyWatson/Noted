import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"


export class NotesController {




  createNote() {
    try {
      debugger
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