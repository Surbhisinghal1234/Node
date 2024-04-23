import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.urlencoded({
    extended: false
}));
const dbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

})

const dbModel = mongoose.model("enquiry", dbSchema);

app.get("/show", async (req, res) => {
    const data = await dbModel.find();
    res.json(data)
})

app.post("/submit", async (req, res) => {
    // console.log(req.body)
    const dataToSave = new dbModel(req.body);
    await dataToSave.save()

});


app.delete("/show/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        const idToDelete = req.params.id;
        await dbModel.deleteOne({ _id: idToDelete });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
});



app.put("/update/:id", async (req, res) => {

    console.log(req.body)
    try {
        const idToUpdate = req.params.id;
        await dbModel.updateOne({ _id: idToUpdate });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
})



app.get("/getById/:id", async (req, res) => {

    try {
        const idToGet = req.params.id;
        const dataFromDb = await dbModel.findOne({ _id: idToGet })
        console.log(dataFromDb)

    }
    catch (error) {
        console.log(error)
    }

})


mongoose.connect("mongodb://127.0.0.1:27017/fullStack").then((response) =>
    app.listen(8000, () => {
        console.log("server start")

    })
).catch((error) => {
    console.log(error)
})

// app.listen(8000, () => {
//     console.log("surbhi")

// })


