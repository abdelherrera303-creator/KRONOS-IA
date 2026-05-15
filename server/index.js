import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/kronos",(req,res)=>{
  const msg = req.body.message;

  res.json({
    reply:"Kronos activo: "+msg
  });
});

app.listen(3001,()=>{
  console.log("KRONOS CORE ONLINE");
});
