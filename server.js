import express from "express";
import bodyParser from "body-parser";
import axios from "axios"

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        console.log(response);
        res.render("home.ejs", { posts: response.data });
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts" });
    }
});

app.get("/new", (req, res) => {
    try {
        res.render("modify.ejs", {header: "New Post" });
    } catch (error) {
        res.status(404).json({ message: "Cannot access site"});
    }
});

app.post("/newPost", async (req, res) => {
    const response = await axios.post(`${API_URL}/newPost`, req.body);
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});