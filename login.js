let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("title").innerText = isLogin ? "Login" : "Signup";
  document.querySelector("button").innerText = isLogin ? "Login" : "Signup";
  document.querySelector(".toggle").innerText =
    isLogin ? "Don't have an account? Signup" : "Already have an account? Login";
}

function handleAuth() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (isLogin) {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return alert("Invalid credentials");

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "e.html";
  } else {
    if (users.some(u => u.username === username)) {
      alert("Username already exists");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login");
    toggleForm();
  }
}
