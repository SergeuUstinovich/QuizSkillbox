import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url = "/api"

export const api = axios.create({
  baseURL: api_url,
  withCredentials: true,
});

export function dataQuiz(queryParams: string | null | undefined) {
  return api
    .get(`/main_page/?course_name=${queryParams}`)
    .then((response) => response.data)
    .catch(validateResponse);
}

export function dataResult(
  name: string,
  phone: string,
  email: string,
  course_name: string,
  utm_source: string,
  utm_medium: string,
  utm_content: string,
  utm_campaign: string,
  utm_term: string,
  full_link: string
) {
  return api
    .post("/amo_crm/", {
      name,
      phone,
      email,
      course_name,
      utm_source,
      utm_medium,
      utm_content,
      utm_campaign,
      utm_term,
      full_link
    })
    .then((response) => response.data)
    .catch(validateResponse);
}
