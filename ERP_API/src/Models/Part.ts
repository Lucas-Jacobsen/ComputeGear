import { ObjectId } from "mongodb";
import mongoose, {Document} from "mongoose";

interface IPart extends Document{
  _id: { $oid: string };
  pn: string;
  description: string;
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
  _id: {type: Number, required: true },
  pn: {type: String, required: true},
  description: {type: String, required: true},
  rev: {type: String, required: true},
  status: {type: Number, required: true},
  pref: {type: Number, required: true},
  ecn: {type: String, required: true},
  oh: {type: Number, required: true},
  cost: {type: Number, required: true},
  type: {type: Number, required: true},
  drawing: {type: [String], required: true},
  assembly: {
    type: [
      {
        type: [String], // First element of the tuple is a string
        $numberInt: String, // Second element of the tuple is an object with $numberInt property of type string
      }
    ],
    required: true,
  },  used: { type: [String], required: true }, // Array of strings
  vendor: { type: [String], required: true },
});

const Part = mongoose.model<IPart>('Part', partSchema);

export default Part;
