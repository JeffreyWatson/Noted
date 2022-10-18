import { generateId } from "../Utils/generateId.js";

export class Note {
  constructor(data) {
    this.id = data.id || generateId(),
      this.name = data.name,
      this.color = data.color,
      this.body = data.body
  }









}