import { Request, Response } from 'express';
import Part from "./Part";
import { IsPathRequired } from 'mongoose/types/inferschematype';

export const getAllParts = async (req: Request, res: Response) => {
  try{
    const parts = await Part.find();
    res.json(parts);
    console.log(parts);
  }
  catch(error)
  {
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export const createPart = async(req: Request, res: Response) => {
  const { _id, pn, description, rev, status, pref, ecn, oh, cost, type, drawing, assembly, used, vendor } = req.body;
  try {
    const newPart = new Part({_id, pn, description, rev, status, pref, ecn, oh, cost, type, drawing, assembly, used, vendor });
    const savedPart = await newPart.save();
    res.json(savedPart);
    console.log(savedPart);
  } catch(error) {
    console.error('Error creating part:', error);
    res.status(500).json({error: "Error creating part. Please try again."});
  }
}


