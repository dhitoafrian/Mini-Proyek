# 📝 To-Do List Sederhana (Vanilla JS)

Aplikasi to-do list sederhana menggunakan JavaScript DOM dan localStorage. User bisa menambahkan dan menghapus task, serta data akan tetap tersimpan saat halaman direfresh.

## 🚀 Fitur

- Tambah tugas baru
- Hapus tugas dari daftar
- Simpan data menggunakan `localStorage`
- Render ulang daftar setiap perubahan

## 🛠️ Teknologi

- HTML
- CSS (opsional)
- JavaScript (Vanilla)

## 📂 Struktur Kode

### 1. Ambil Data dari localStorage

```js
let todos = JSON.parse(localStorage.getItem('todos')) || [];
Mengambil data yang sebelumnya disimpan, atau membuat array kosong jika belum ada data.

2. Fungsi Simpan
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
Menyimpan array todos ke localStorage setelah diubah ke format string.

3. Tambah To-do
addbtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value === '') return alert('input tidak boleh kosong');
    todos.push(value);
    input.value = '';
    renderList();
    saveTodos();
});
Validasi input, tambahkan data ke array, reset input, render ulang, dan simpan.

4. Render Daftar
function renderList() {
    todoList.textContent = '';
    todos.forEach((todo, index) => {
        ...
    });
}
Membersihkan isi lama, lalu render ulang elemen <li> dari array todos.

5. Hapus To-do
delbtn.addEventListener('click', () => {
    todos.splice(index, 1);
    renderList();
    saveTodos();
});
Menghapus berdasarkan index, kemudian render ulang dan simpan.
