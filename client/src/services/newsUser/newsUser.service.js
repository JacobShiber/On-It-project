const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://mern-office-app.herokuapp.com"
    : "http://localhost:6500/news";
export const GetAllNews = async () => {
  try {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log("error in method get");
  }
};
export const GetNewsById = async () => {
  try {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error: "the method getById isnt work" }));
  } catch (error) {
    console.log("error in method getById");
  }
};
export const PostNews = async (userData) => {
  try {
    return await fetch(`${basic_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log("error in method post");
  }
};
export const PutNews = async (userData, id) => {
  try {
    return await fetch(`${basic_url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log("error in method put");
  }
};
export const DeleteNews = async (id) => {
  try {
    return await fetch(`${basic_url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log("error in method post");
  }
};
