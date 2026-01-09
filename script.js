//Login//
function prosesLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user !== "" && pass !== "") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", user);
        
        alert("Login Berhasil! Selamat datang, " + user);
        window.location.href = "transaksi.html";
    } else {
        alert("Peringatan: Username dan Password wajib diisi!");
    }
}

//SimpanTransaksi//
function simpanTransaksi() {
    const namaUser = document.getElementById('namaUser').value;
    const namaProjek = document.getElementById('namaProjek').value;
    const kategori = document.getElementById('kategori').value;
    const durasi = document.getElementById('durasi').value;

    if (namaUser === "" || namaProjek === "" || kategori === "" || durasi === "") {
        alert("Pesan Kesalahan: Semua kolom harus diisi!");
        return; 
    }

    const tbody = document.querySelector('#tabelTransaksi tbody');
    const row = tbody.insertRow();
    
    row.innerHTML = `
        <td>${namaUser}</td>
        <td>${namaProjek}</td>
        <td>${kategori}</td>
        <td>${durasi} Jam</td>
    `;

    alert("Data Berhasil Disimpan!");
    document.getElementById('formTransaksi').reset();
}

//Login//
window.onload = function() {
    const savedUser = localStorage.getItem("username");
    const inputNamaUser = document.getElementById('namaUser');
    
    if (savedUser && inputNamaUser) {
        inputNamaUser.value = savedUser;
    }
};

//Animasi//
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
});