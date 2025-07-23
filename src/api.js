import axios from "axios";

const http=axios.create({
  baseURL:import.meta.env.VITE_MOCKAPI_BASE_URL,
  timeout:5000,
  headers: {
    "content-type": "application/json",
  },
});  


export const api={
    todos:{
        getAll(params={}){
          return http
          .get("todos", { params })
          .catch((error)=>
            error.response.status === 404 ? [] : Promise.reject(error)
        );
        },
        create(data){
            return fetch(`${BASE_URL}todos`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
              })
                .then((response) => !!response.ok && response.json())
        },
        update(id,data){
            return fetch(`${BASE_URL}todos/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
              })
                .then((response) => !!response.ok && response.json())
        },
        delete(id){
            return fetch(`${BASE_URL}todos/${id}`, {
                  method: "DELETE",
                })
                  .then((response) => !!response.ok && response.json())
        },

        }
    }