const basic_url = "http://localhost:6500/schedule";



export const GetAllSchedules = async () => {
    return await fetch(`${basic_url}` , {
      headers: {
        Authorization:`bearer ${localStorage.getItem("token")}` 
      }
    })
      .then((res) =>  res.json())
      .catch((error) => console.log({ error: "the method get isnt work" }));
  
};

export const GetSchedulesById = async () => {
  try {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization:`bearer ${localStorage.getItem("token")}` 
      }
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error: "the method getById isnt work" }));
  } catch (error) {
    console.log("error in method getById");
  }
};

export const PostSchedules = async (userData) => {
  try {
    return await fetch(`${basic_url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization:`bearer ${localStorage.getItem("token")}`  },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log("error in method post");
  }
};

export const PutSchedules = async (userData) => {
  try {
    return await fetch(`${basic_url}/id`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization:`bearer ${localStorage.getItem("token")}`  },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log("error in method put");
  }
};

export const DeleteSchedules = async () => {
  try {
    return await fetch(`${basic_url}/id`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization:`bearer ${localStorage.getItem("token")}`  },
    });
  } catch (error) {
    console.log("error in method post");
  }
};
