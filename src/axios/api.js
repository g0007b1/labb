import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.hh.ru/",
})

export const api = {
    getVacancy(vacancy, amount) {
        return instance.get(`vacancies?text=${vacancy}&per_page=${amount}`).then(response => response.data)
    }
}