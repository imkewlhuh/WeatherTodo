import express from "express";
import { prisma } from "../db/index.js";

export default function taskRouter() {
    const router = express.Router();

    //GET all tasks
    router.get("/", async (req, res) => {
        try {
            const tasks = await prisma.task.findMany({
                select: {
                    id: true,
                    description: true,
                    status: true
                }
            });

            if (tasks) {
                res.status(200).json({
                    success: true,
                    message: "Tasks found",
                    tasks
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Could not find tasks"
                });
            };
        } catch (e) {
            console.log(e);
            res.status(400).json({
                success: false,
                message: "Something went wrong"
            });
        };
    });

    //Create a task
    router.post("/new", async (req, res) => {
        try {
            const newTask = await prisma.task.create({
                data: {
                    description: req.body.description,
                    statusId: 1
                }
            });

            if (newTask) {
                res.status(201).json({
                    success: true,
                    message: "Added task"
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "Failed to add task"
                });
            };
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Failed to add"
            });
        };
    });

    //UPDATE task
    router.put("/:taskId", async (req, res) => {
        const id = parseInt(req.params.taskId);

        try {
            const task = await prisma.task.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            if (task) {
                const updatedTask = await prisma.task.update({
                    where: {
                        id: id
                    },
                    data: {
                        description: req.body.description,
                        statusId: parseInt(req.body.statusId)
                    }
                });

                if (updatedTask) {
                    res.status(200).json({
                        success: true,
                        message: "Task updated"
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: "Failed to update"
                    });
                };
            };
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Could not find task"
            });
        };
    });

    //DELETE task
    router.delete("/:taskId", async (req, res) => {
        const id = parseInt(req.params.taskId);

        try {
            const task = await prisma.task.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            if (task) {
                const deleteTask = await prisma.task.delete({
                    where: {
                        id: id
                    }
                });

                if (deleteTask) {
                    res.status(200).json({
                        success: true,
                        message: "Task deleted"
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: "Failed to delete"
                    });
                };
            };
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Could not find task"
            });
        };
    });

    return router;
};