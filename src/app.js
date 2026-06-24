const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const db = require("./config/firebase");

app.get("/test-firebase", async (req, res) => {
    try {

        const doc = await db
            .collection("test")
            .add({
                message: "Firebase Connected",
                createdAt: new Date()
            });

        res.json({
            success: true,
            id: doc.id
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

app.get("/test-firebase", async (req, res) => {
    try {

        const docRef = await db
            .collection("test")
            .add({
                message: "Firebase Connected",
                createdAt: new Date()
            });

        res.json({
            success: true,
            id: docRef.id
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});