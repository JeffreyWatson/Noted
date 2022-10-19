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
    <div class="card rounded-pill text-black text-center mt-2" style="background-color: ${this.color}">${this.name}</div>
    `
  }






}