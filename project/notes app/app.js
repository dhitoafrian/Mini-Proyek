const titleInput = document.getElementById('note-title');
const contentInput = document.getElementById('note-content');
const addNoteBtn = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes))
};

function renderNotes() {
  noteList.innerHTML = '';

  if (notes.length === 0) {
    noteList.innerHTML = '<p>Belum ada catatan.</p>';
    return;
  }

  notes.forEach((note, index) => {
    const noteCard = document.createElement('div')
    noteCard.clasName = 'note-card';

    noteCard.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
    <small>${note.date}</small>
    <button class="delete-btn">HAPUS</button>
    ` 

    noteCard.querySelector('.delete-btn').addEventListener('click', () => {
      note.splice(index, 1);
      renderNotes();
      saveNotes()
    });
    noteList.appendChild(noteCard);
  });
}

addNoteBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) return alert('Judul dan isi catatan tidak boleh kosong');

  const note = {
    title,
    content,
    date: new date().toLocaleString()
  };


  notes.push(note);
  saveNotes();
  renderNotes();

  titleInput.value = '';
  contentInput.value = '';
  titleInput.focus()
});
renderNotes()