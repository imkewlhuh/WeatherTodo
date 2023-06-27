import axios from "axios";
import { baseURL } from "../constants";

//GET all tasks
export async function getAllTasks() {
    const response = await axios.get(`${baseURL}/task`);

    console.log(response);
    return response;
};

//CREATE task
export async function addTask(task) {
    const response = await axios.post(
        `${baseURL}/task/new`,
        task
    );

    console.log(response);
    return response;
};

//UPDATE task by id
export async function updateTaskById(id, updatedTask) {
    const response = await axios.put(
        `${baseURL}/task/${id}`, 
        updatedTask
    );

    console.log(response);
    return response;
};

//DELETE task by id
export async function deleteTaskById(id) {
    const response = await axios.delete(`${baseURL}/task/${id}`);

    console.log(response);
    return response;
}