const USER_KEY = "user";
const TOKEN_KEY = "token";

/* ---------------- Login ---------------- */

export function login(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_KEY, "mock-token");
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

/* ---------------- Auth Check ---------------- */

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}