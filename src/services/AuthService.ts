export const handleRegister = async (name: string, email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || '[]');

  if(users.some((u: any) => u.email === email)) {
    alert("email in use")
    return
  }

  const newUser = {
    id: Date.now(),
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

export const handleLogin = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || '[]');

  const user = users.find(
    (user: any) => user.email === email && user.password === password
  );

  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};