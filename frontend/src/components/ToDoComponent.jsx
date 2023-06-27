import { useEffect, useState } from "react";
import {
    Checkbox, TextField, Divider,
    Fab, IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getAllTasks, addTask, updateTaskById, deleteTaskById } from "../api/task";

function ToDoTask(props) {
    const [showEdit, setShowEdit] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({ description: "", statusId: 1 });

    const handleEdit = async () => {
        if (updatedTask.description != "" && showEdit === true) {
            console.log(updatedTask);
            await updateTaskById(props.id, updatedTask);
            setShowEdit(false);
            props.refresh();
        }

        setShowEdit(!showEdit);
    }

    const handleComplete = async () => {
        if (props.status.state === "incomplete") {
            await updateTaskById(props.id, { description: props.description, statusId: 2 });
            props.refresh();
        } else if (props.status.state === "complete") {
            await updateTaskById(props.id, { description: props.description, statusId: 1 });
            props.refresh();
        }
    }

    const handleDelete = async () => {
        await deleteTaskById(props.id);
        props.refresh();
    }

    return (
        <>
            <div className="todoTask">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                        checked={props.status.state === "complete"}
                        onClick={handleComplete}
                        color="default"
                    />
                    {
                        showEdit ?
                            <TextField
                                onChange={(e) => setUpdatedTask({ description: e.target.value, statusId: props.status.id })}
                                placeholder={props.description}
                                size="small"
                            />
                            : 
                            <p style={{textDecoration: props.status.state === "complete" ? "line-through" : ""}}>{props.description}</p>
                    }
                </div>
                <div style={{display: "flex", flexWrap: "nowrap"}}>
                    <IconButton onClick={handleEdit}>
                        {showEdit ? <CheckIcon /> : <EditIcon />}
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default function ToDoComponent() {
    const [showAdd, setShowAdd] = useState(false);
    const [newTodo, setNewTodo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const tasksData = await getAllTasks();
            console.log(tasksData);
            setTasks(tasksData.data.tasks);
        };
        fetch();
    }, [refresh])

    const handleAdd = async () => {
        if (newTodo != "" && showAdd === true) {
            console.log(newTodo);
            await addTask({ description: newTodo });
            setNewTodo("");
            setRefresh(!refresh);
        };

        setShowAdd(!showAdd)
    }
    return (
        <div className="todoContainer">
            <h1>To-Do List <span><Fab onClick={handleAdd} size="small"><AddIcon /></Fab></span></h1>
            {
                showAdd ?
                    <TextField
                        style={{ width: "15em" }}
                        label="Add to-do"
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    : ""
            }
            <div className="todoBox">
                {
                    tasks.map((task, i) => {
                        if (task.status.state === "incomplete") {
                            return (
                                <div key={i}>
                                    <ToDoTask {...task} refresh={() => setRefresh(!refresh)} />
                                </div>
                            )
                        }
                    })
                }
                {
                    tasks.map((task, i) => {
                        if (task.status.state === "complete") {
                            return (
                                <div style={{opacity: "0.5"}} key={i}>
                                    <ToDoTask {...task} refresh={() => setRefresh(!refresh)} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}