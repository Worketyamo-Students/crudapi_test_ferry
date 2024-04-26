import express from "express";
import cors from "cors";
import dotenv from "dotenv"

const app  =express();
app.use(cors())
app.use(express.json());
dotenv.config();
const port =process.env.PORT

const chiens = [
      {
         mon:"washinton",
         couleur:"noir",
         race:"berger allemand",
      }
]
//get 
app.get("/meschiens", (req, res)=>{
      res.status(200).json(chiens)

})
//ajout de l'identifiant 
const id =     Math.floor(
      5437657657 * Math.random(100, 76575757657) * Math.random(100, 76575757657)
    );
chiens[0].Id=id

app.post("/meschiens",(req, res)=>{
 
      let newdog = req.body
   
   console.log(newdog)
   chiens.push(newdog) 
   res.send(chiens)
})


app.listen(port, ()=>{
      console.log( `le server tourne sur le port ${port}`)
})
