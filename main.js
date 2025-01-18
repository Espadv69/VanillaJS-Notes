// DOM elements
const $noteInput = document.querySelector('.note-input') // input
const $addNoteButton = document.querySelector('.add-note') // button
const $noteList = document.querySelector('.notes-list') // ul

// Recovery notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [] // Initialize notes array

// Render notes
function renderNotes() {
  $noteList.innerHTML = '' // Clear note list before rendering

  notes.forEach((note, index) => {
    const $li = document.createElement('li') // Create li element
    $li.textContent = note // Set textContent for the note

    // Create delete button
    const $deleteButton = document.createElement('button')
    $deleteButton.textContent = 'Delete' // Button text
    $deleteButton.classList.add('delete') // Add class for styling
    $deleteButton.addEventListener('click', () => deleteNote(index)) // Attach event listener

    $li.appendChild($deleteButton) // Append the delete button to li
    $noteList.appendChild($li) // Append li to ul
  })
}

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

// Delete note
function deleteNote(index) {
  notes.splice(index, 1) // Remove note from notes array
  localStorage.setItem('notes', JSON.stringify(notes)) // Save notes array to localStorage
  renderNotes() // Render notes
}

// Event listeners
$addNoteButton.addEventListener('click', addNote) // Add note event listener

// Initial render
renderNotes() // Render notes on page load
