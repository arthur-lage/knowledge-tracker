export const handleRegister = async (name, email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if(users.filter(u => u.email == email).length != 0) {
    alert("email in use")
    return
  }

  const newUser = {
    id: new Date().getUTCMilliseconds,
    name,
    email,
    password,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
};

export const handleLogin = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"))
}

export const logOut = () => {
  localStorage.removeItem("currentUser")
}