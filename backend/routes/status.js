import express from "express";
import { prisma } from "../db/index.js";

export default function statusRouter() {
    const router = express.Router();

    //Create status
    router.post("/new", async (req, res) => {
        try {
            const newStatus = await prisma.status.create({
                data: {
                    state: req.body.state
                }
            });

            if (newStatus) {
                res.status(201).json({
                    success: true,
                    message: "Added status"
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "Failed to add status"
                });
            };
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Failed to create status"
            });
        };
    });

    //DELETE status
    router.delete("/:statusId", async (req, res) => {
        const id = parseInt(req.params.statusId);

        try {
            const status = await prisma.status.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            if (status) {
                const deleteStatus = await prisma.status.delete({
                    where: {
                        id: id
                    }
                });

                if (deleteStatus) {
                    res.status(200).json({
                        success: true,  
                        message: "Status deleted"
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Failed to delete status"
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
}