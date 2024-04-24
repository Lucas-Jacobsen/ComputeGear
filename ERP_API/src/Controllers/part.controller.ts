import { Request, Response } from 'express';
import Part from "../Models/Part";

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

