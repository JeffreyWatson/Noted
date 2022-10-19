import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor(data) {
    this.id = data.id || generateId(),
      this.name = data.name,
      this.color = data.color,
      this.date = new Date()
    this.body = data.body || ''
  }


  // NOTE Set active in when we click on it
  get Template() {
    return `
    <div class="card rounded-pill text-black text-center mt-2 selectable d-flex flex-row justify-content-center" style="background-color: ${this.color}" data-bs-dismiss="offcanvas" onclick="app.notesController.setActive('${this.id}')">${this.name}<i class="mdi mdi-delete-forever-outline text-danger" onclick="app.notesController.deleteNote('${this.id}')"></i></div>
    `
  }


  get Active() {
    return `
    <div style="background-color: ${this.color}" class="d-flex flex-row justify-content-around text-light">
    <h4>${this.name}</h4>
    <h4>Created At: ${this.date.toLocaleDateString()}</h4>
    </div>
        <textarea class="vh-100 p-2" cols="132" placeholder="Start taking notes..." onblur="app.notesController.editBody('${this.id}')" type="text" name="body" id="body" value="text" style="height: 50px">${this.body}</textarea>
    `
  }






}