// @ts-nocheck
import axios from "axios";
import { expect, test } from "vitest";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function getTasks() {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    throw new Error(`Erro: ${error}`);
  }
}

async function addTask(taskData) {
  try {
    const response = await api.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    throw new Error(`erro: ${error}`);
  }
}

async function editTask(taskId, updatedData) {
  try {
    const response = await api.put(`/tasks/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(`err: ${error}`);
  }
}

async function deleteTask(taskId) {
  try {
    const response = await api.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Er: ${error}`);
  }
}

test("get all tasks", async () => {
  const tasks = await getTasks();
  expect(Array.isArray(tasks)).toBe(true);
});

test("add new task and return ok ", async () => {
  const newTaskData = {
    description: "New task at date",
  };

  const addedTask = await addTask(newTaskData);
  expect(addedTask.description).toBe("New task at date");
});

test("edit task", async () => {
  const newTaskData = {
    description: "New task",
  };

  const addedTask = await addTask(newTaskData);
  const taskId = addedTask.id;
  const updatedTaskData = {
    description: "Task updated",
    completed: true,
  };

  const editedTask = await editTask(taskId, updatedTaskData);
  expect(editedTask.description).toBe("Task updated");
  expect(editedTask.completed).toBe(true);
});

test("delete task", async () => {
  const newTaskData = {
    description: "New task",
  };
  const addedTask = await addTask(newTaskData);
  const taskIdToDelete = addedTask.id;
  const deletedTask = await deleteTask(taskIdToDelete);
  expect(deletedTask.id).toBe(taskIdToDelete);
});

test("add new task with invalid data", async () => {
  const invalidData = "any data";
  try {
    await addTask(invalidData);
  } catch (error) {
    expect(error.message).toContain("erro:");
  }
});

test("edit non-existent task", async () => {
  const nonExistentTaskId = "999";
  const tryUpdateTask = {
    description: "Task updated",
    completed: true,
  };
  try {
    await editTask(nonExistentTaskId, tryUpdateTask);
  } catch (error) {
    expect(error.message).toContain("err:");
  }
});

