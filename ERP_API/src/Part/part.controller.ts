import { Request, Response } from 'express';
import Part from "./Part";
import { CustomAggregationExpressionOperatorReturningAny } from 'mongoose';

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
try{
  const newPart = await Part.create();
  res.json(newPart);
  console.log(newPart);
}
catch(error)
{
  res.status(500).json({error: "Idiot couldn't create a new part"});
}
}

