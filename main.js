// DOM elements
const $noteInput = document.querySelector('.note-input') // input
const $addNoteButton = document.querySelector('.add-note') // button
const $noteList = document.querySelector('.note-list') // ul

// Recovery notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [] // Initialize notes array

// Add note
function addNote() {
  const noteText = $noteInput.value.trim() // Get note text

  if (noteText) {
    notes.push(noteText) // Add note to notes array
    localStorage.setItem('notes', JSON.stringify(notes)) // Save notes array to localStorage
    $noteInput.value = '' // Clear input
    renderNotes() // Render notes
  }
}