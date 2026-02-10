import {TaskPoints} from "@/lib/types";

export interface TaskPayload{
    "name":string,
    "description": string,
    "points": TaskPoints

}

export interface UpdateTaskPayload{
    id:string
    "name"?:string,
    "description"?: string,
    "points"?: TaskPoints
}