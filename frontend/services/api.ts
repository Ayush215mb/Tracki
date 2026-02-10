import axios from "axios";
import {API_BASE_URL} from "@/lib/config"
import {TaskPayload, UpdateTaskPayload} from "@/services/payload";

export async function getAllTasks(){
    try{
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export async function getTaskById(id:string){
    try{
        const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export async function createTask(task:TaskPayload){
    try{
        const response = await axios.post(`${API_BASE_URL}/tasks`, task);
        return response.data;
    }catch (error){
        console.error(error);
    }

}

export async function updateTask(task:UpdateTaskPayload){
    try{
        const response = await axios.patch(`${API_BASE_URL}/tasks/${task.id}`, task);
    }catch (error){
        console.error(error);
    }
}

export async function deleteTask(id:string){
    try{
        const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
    }catch (error){
        console.error(error);
    }
}