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
        create(){},
        update(){},
        delete(){},

        }
    }