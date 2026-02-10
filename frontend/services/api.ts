
import axios from "axios";
const API_BASE_URL =
    process.env.EXPO_PUBLIC_API_BASE_URL ?? "http://localhost:8000"
export async function getAllTasks(){
    try{
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        console.log(response)
        return response.data;
    }catch (error){
        console.log(error);
    }
}
