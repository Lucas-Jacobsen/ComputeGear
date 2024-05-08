import { ObjectId } from "mongodb";
import mongoose, {Document} from "mongoose";

interface IPart extends Document{
  _id: string;
  pn: string;
  description: string[];
  rev: string;
  status: number;
  pref: number;
  ecn: string;
  oh: number;
  cost: number;
  type: number;
  drawing: string[];
  assembly: [string, { $numberInt: string }][];
  used: string[];
  vendor: string[];
}

const partSchema = new mongoose.Schema({
  _id: {type: String, required: true },
  pn: {type: String, required: true},
  description: {type: [String], required: true},
  rev: {type: String, required: true},
  status: {type: Number, required: true},
  pref: {type: Number, required: true},
  ecn: {type: String, required: true},
  oh: {type: Number, required: true},
  cost: {type: Number, required: true},
  type: {type: Number, required: true},
  drawing: {type: [String], required: true},
  assembly: {type: [{type: [String],$numberInt: String,}],required: true,},
  used: { type: [String], required: true },
  vendor: { type: [String], required: true },
});

const Part = mongoose.model<IPart>('Part', partSchema);

export default Part;
