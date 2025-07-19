export const api={
    todos:{
        getAll(params={}){
             const searchParam = new URLSearchParams(params).toString();
            
                return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos?${searchParam}`, {
                  method: "GET",
                  headers: { "content-type": "application/json" },
                })
                  .then((response) => {
                    if (response.ok) return response.json();
                    if (response.status === 404) return [];
                  })
              
        },
        create(data){
            return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
              })
                .then((response) => !!response.ok && response.json())
        },
        update(id,data){
            return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
              })
                .then((response) => !!response.ok && response.json())
        },
        delete(id){
            return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos/${id}`, {
                  method: "DELETE",
                })
                  .then((response) => !!response.ok && response.json())
        },

        }
    }