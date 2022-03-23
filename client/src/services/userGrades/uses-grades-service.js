const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://mern-office-app.herokuapp.com"
    : "http://localhost:6500/grades";
export const GetAllGrades = async () => {
  try {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error: "the method get isnt work" }));
  } catch (error) {
    console.log("error in method get");
  }
};
export const GetGradeById = async () => {
  try {
    return await fetch(`${basic_url}/id`, {
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
export const PostGrade = async (userData) => {
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
export const PutGrade = async (userData) => {
  try {
    return await fetch(`${basic_url}`, {
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
export const DeleteGrade = async (userData) => {
  try {
    return await fetch(`${basic_url}`, {
      method: "DELETE",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log("error in method delete");
  }
};
