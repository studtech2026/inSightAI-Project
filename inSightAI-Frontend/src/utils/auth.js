const USER_KEY = "user";
const TOKEN_KEY = "token";

/* ---------------- Login ---------------- */

export function login(user, token) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_KEY, token);
}

/* ---------------- Logout ---------------- */

export function logout() {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
}

/* ---------------- Current User ---------------- */

export function getCurrentUser() {
  const user = localStorage.getItem(USER_KEY);

  return user ? JSON.parse(user) : null;
}

/* ---------------- Get Token ---------------- */

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/* ---------------- Auth Check ---------------- */

export function isAuthenticated() {
  return !!getToken();
}