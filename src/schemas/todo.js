import * as Yup from "yup";
import { PRIORITIES } from "../constants/priorities";

export function getTodoSchema({isNew}) {
  const deadlineRule = Yup.string()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Deadline should be valid date in YYYY-MM-DD format"
    );
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name should have min length of 3 characters")
      .max(50, "Name should have max length of 50 characters"),
    description: Yup.string().max(
      200,
      "Description should have max length of 200 characters"
    ),
    deadline: Yup.string(),
    priority: Yup.string()
      .required("Priority is not valid value")
      .oneOf(Object.keys(PRIORITIES), "Priority is not valid value"),
  });
}