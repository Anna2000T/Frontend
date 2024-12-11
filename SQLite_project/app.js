import express, { Router } from 'express'
import cors from 'cors'
import {db, initializeDb ,dbQuery, dbRun} from './database.js'



const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())




app.get("/users",async (req,res) =>{
    const user = await dbQuery("SELECT * FROM users")
    res.status(200).json(user)

})

app.get("/users/:id",async (req,res) =>{


    const user = await dbQuery("SELECT * FROM users WHERE id = ?",[req.params.id])
    if(user.length == 0)
    {
        return res.status(404).json({message: `User was not found :( ))`})
    }
    res.status(200).json(user[0])

})


app.post("/users",async (req,res) =>{

    
    if(!req.body.id)
    {
        return res.status(404).json({message: "The Data that you are looking for is mising :( "})
    }
    const [user] = await dbQuery("SELECT * FROM users WHERE id = ?",[req.params.id])
    if(!user)
    {

    }
    await dbRun("INSERT INTO users (firstname, lastname, email, class) VALUES (?, ?, ?, ?)",[req.body.firstname , +req.body.lastname , +req.body.email , +req.body.class])
    res.status(200).json({message:`User created :) `})

})




app.put("/users/:id",async(req,res) =>{

   
    if(!req.body.id)
    {
            return res.status(404).json({message: "The Data that you are looking for is mising :( "})
    }
    const user = await dbQuery("SELECT * FROM users WHERE id = ?",[req.params.id])

    if(!user)
    {
        return res.status(404).json({message: `User was not found`})
    } 

    await dbQuery("UPDATE users SET email = ?, firstname = ? lastname =? class = ? WHERE id = ?",[req.body.email, +req.body.firstname, +req.body.lastname, +req.body.class])
    res.status(201).json({message: `Update`})
    

})


app.delete("/users/:id",async (req,res) =>{

    await dbRun("DELETE FROM users WHERE id = ?", [req.params.id])
    res.status(500).json({message: `Deleted`})


})




async function start()
{
    await initializeDb()
    app.listen(PORT, () => console.log(`server is running on ${PORT} port`))

}

start()
