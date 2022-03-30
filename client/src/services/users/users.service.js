const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://mern-office-app.herokuapp.com"
    : "http://localhost:6500/users";

export const GetAllUsers = async () => {
  return await fetch(`${basic_url}`)
    .then((res) => res.json())
    .catch((error) => console.log({ error: "the method get isnt work" }));
};

export const PutUser = async (id, userData) => {
  try {
    return await fetch(`${basic_url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    }).then(res => res.json())
  } catch (error) {
    console.log("error in method put");
  }
};

export const userLogin = async (userData) => {
  return await fetch(`${basic_url}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};
export const userRegister = async (userData) => {
  return await fetch(`${basic_url}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
