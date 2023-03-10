import axios from 'axios';
import {ICreateTask, ITodo, IUpdateTask} from "../types/todoType";




export const createTask = async (todo: ICreateTask) => {
    try {
        const res = await axios.post('/api/todos/create', todo);
        return res;
    } catch (err: any) {
        return err;
    }
};

export const getTasks = async () => {
    try {
        const res = await axios.get('/api/todos');
        return res;
    } catch (err: any) {
        return err;
    }
};

export const getTask = async (id: string) => {
    try {
        const res = await axios.get(`/api/todos/${id}`);
        return res;
    } catch (err: any) {
        return err;
    }
};

export const updateTask = async (id: string, todo: IUpdateTask) => {
    try {
        const res = await axios.put(`/api/todos/update/${id}`, todo);
        return res;
    } catch (err: any) {
        return err;
    }
};

export const deleteTask = async (id: string) => {
    try {
        const res = await axios.delete(`/api/todos/delete/${id}`);
        return res;
    } catch (err: any) {
        return err;
    }
};
