import * as Yup from "yup";

export function getTodoSchema(){
    return Yup.object().shape({
        name: Yup.string(),
        description: Yup.string(),
        deadline:Yup.string(),
        priority:Yup.string()
    })
}