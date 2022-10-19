import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor(data) {
    this.id = data.id || generateId(),
      this.name = data.name,
      this.color = data.color,
      this.body = data.body || ''
  }


  get Template() {
    return `
    <div class="card rounded-pill text-black text-center mt-2 selectable d-flex flex-row justify-content-center" style="background-color: ${this.color}" onclick="app.notesController.editBody('${this.id}')">${this.name}<i class="mdi mdi-delete-forever-outline text-danger" onclick="app.notesController.deleteNote('${this.id}')"></i></div>
    `
  }

  get Template1() {
    return `
        <textarea class="vh-100" cols="99" onblur="app.notesController.editBody('${this.id}')" type="text" name="body" id="body" value="text" style="height: 50px">${this.body}</textarea>
    `
  }






}