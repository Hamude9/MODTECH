function toggleAuth(isRegister) {
  document.getElementById('loginForm').style.display = isRegister ? 'none' : 'block';
  document.getElementById('registerForm').style.display = isRegister ? 'block' : 'none';
}

const adminAccount = {
  username: 'admin',
  password: 'modtech123'
};

let currentUser = null;

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === adminAccount.username && password === adminAccount.password) {
    currentUser = 'admin';
    document.getElementById('adminBtn').style.display = 'inline';
    enterApp();
  } else {
    alert("بيانات غير صحيحة");
  }
};

registerForm.onsubmit = (e) => {
  e.preventDefault();
  alert("تم التسجيل بنجاح! قم بتسجيل الدخول الآن.");
  toggleAuth(false);
};

function enterApp() {
  document.getElementById('authScreen').style.display = 'none';
  document.getElementById('mainApp').style.display = 'block';
  loadSection('alfa');
}

function loadSection(section) {
  document.getElementById('content').innerHTML = `<h2>${section}</h2><p>المحتوى الخاص بـ ${section}</p>`;
}

function loadAdminPanel() {
  if (currentUser !== 'admin') return;
  document.getElementById('content').innerHTML = `<h2>لوحة تحكم الأدمن</h2><p>إضافة أو تعديل الخدمات</p>`;
}
