function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  const forms = document.querySelectorAll('.form');

  tabs.forEach(tab => tab.classList.remove('active'));
  forms.forEach(form => form.classList.remove('active'));

  document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
  clearPesan();
}

function tampilkanPesan(teks) {
  document.getElementById("pesan").innerText = teks;
}

function clearPesan() {
  document.getElementById("pesan").innerText = "";
}

function validasiInput(username, password) {
  const usernameRegex = /^[A-Za-z]+$/;
  const passwordRegex = /^(?=.*\d)[A-Za-z\d]{8,20}$/;

  if (!usernameRegex.test(username)) {
    tampilkanPesan("Username hanya boleh huruf alfabet (A-Z, a-z).");
    return false;
  }

  if (!passwordRegex.test(password)) {
    tampilkanPesan("Password harus 8-20 karakter dan mengandung angka.");
    return false;
  }

  return true;
}

function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (!validasiInput(username, password)) return;

  const data = { username, password: hashPassword(password) };
  localStorage.setItem("userData", JSON.stringify(data));

  tampilkanPesan("Registrasi berhasil! Silakan login.");
}

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!validasiInput(username, password)) return;

  const storedData = JSON.parse(localStorage.getItem("userData"));

  if (!storedData) {
    tampilkanPesan("Belum ada akun terdaftar.");
    return;
  }

  if (username === storedData.username && hashPassword(password) === storedData.password) {
    tampilkanPesan("Login berhasil! Selamat datang.");
  } else {
    tampilkanPesan("Username atau password salah.");
  }
}

function hashPassword(password) {
  // Simulasi hashing sederhana (bukan untuk produksi)
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}
