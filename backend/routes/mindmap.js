import express from "express";
import MindMap from "../models/MindMap.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const auth = (req,res,next)=>{
  try{
    const token = req.headers.authorization;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;
    next();
  }catch{
    res.status(401).json({message:"Unauthorized"});
  }
};

router.post("/", auth, async (req,res)=>{
  const map = await MindMap.create({
    userId: req.userId,
    title: req.body.title,
    nodes: []
  });
  res.json(map);
});

router.post("/:id/node", auth, async (req,res)=>{
  const map = await MindMap.findById(req.params.id);
  map.nodes.push({ text:req.body.text });
  await map.save();
  res.json(map);
});

router.get("/", auth, async (req,res)=>{
  const maps = await MindMap.find({ userId:req.userId });
  res.json(maps);
});

export default router;
