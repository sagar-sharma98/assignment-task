const BASE = "https://jsonplaceholder.typicode.com/users";

// Funtion for get all user data
export const getUsers = () => fetch(BASE).then((res) => res.json());

// Funtion for get user by the id
export const getUser = (id) => fetch(`${BASE}/${id}`).then((res) => res.json());

// Function for create user
export const createUser = (data) =>
  fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

// Funtion for update the user
export const updateUser = (id, data) =>
  fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

// Funtion for the delete user
export const deleteUser = (id) =>
  fetch(`${BASE}/${id}`, {
    method: "DELETE",
  }).then(() => true);
