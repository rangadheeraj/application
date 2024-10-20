window.onload = function () {
  const loadingScreen = document.querySelector('.loading-screen');
  const mainApp = document.querySelector('.main-app');

  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainApp.style.display = 'block';
  }, 10000); // 10-second loading

  const createAccountBtn = document.getElementById('create-account');
  const loginBtn = document.getElementById('login');
  const createAccountScreen = document.querySelector('#create-account-screen');
  const loginScreen = document.querySelector('#login-screen');
  const authScreen = document.querySelector('.auth-screen');
  const homeScreen = document.querySelector('.home-screen');
  const groupScreen = document.querySelector('.group-screen');
  const groupCreateScreen = document.querySelector('.group-create-screen');
  const groupJoinScreen = document.querySelector('.group-join-screen');
  const chatScreen = document.querySelector('.chat-screen');

  createAccountBtn.onclick = () => {
    homeScreen.style.display = 'none';
    authScreen.style.display = 'block';
    createAccountScreen.style.display = 'block';
  };

  loginBtn.onclick = () => {
    homeScreen.style.display = 'none';
    authScreen.style.display = 'block';
    loginScreen.style.display = 'block';
  };

  document.getElementById('create-account-btn').onclick = () => {
    authScreen.style.display = 'none';
    groupScreen.style.display = 'block';
  };

  document.getElementById('login-btn').onclick = () => {
    authScreen.style.display = 'none';
    groupScreen.style.display = 'block';
  };

  document.getElementById('create-group').onclick = () => {
    groupScreen.style.display = 'none';
    groupCreateScreen.style.display = 'block';
  };

  document.getElementById('join-group').onclick = () => {
    groupScreen.style.display = 'none';
    groupJoinScreen.style.display = 'block';
  };

  document.getElementById('create-group-btn').onclick = () => {
    groupCreateScreen.style.display = 'none';
    chatScreen.style.display = 'block';
  };

  document.getElementById('join-group-btn').onclick = () => {
    groupJoinScreen.style.display = 'none';
    chatScreen.style.display = 'block';
  };
};
