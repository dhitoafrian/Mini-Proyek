// Ambil elemen DOM untuk menampilkan count dan tombol-tombol
const countDisplay = document.getElementById('count');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');

// Inisialisasi nilai awal counter
let count = 0;

// Tampilkan warna merah saat pertama kali jika count = 0
if (count === 0) countDisplay.style.color = 'red';

// Event listener tombol "tambah"
btnIncrease.addEventListener('click', () => {
    count++; // Tambah nilai count
    updateUi(); // Update tampilan ke layar
});

// Event listener tombol "kurang"
btnDecrease.addEventListener('click', () => {
    if (count > 0) count--; // Kurangi count selama lebih dari 0
    updateUi();
});

// Event listener tombol "reset"
btnReset.addEventListener('click', () => {
    count = 0; // Reset nilai count ke 0
    updateUi();
});

// Fungsi untuk menampilkan nilai count ke layar
function updateUi() {
    countDisplay.textContent = count;
    // Atur warna berdasarkan nilai count
    if (count === 0) countDisplay.style.color = 'red'
    else if (count <= 5) countDisplay.style.color = 'black'
    else countDisplay.style.color = 'green'
}
