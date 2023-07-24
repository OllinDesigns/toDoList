import mongoose from "mongoose";


export interface ITodoItem {
  _id: mongoose.Types.ObjectId;
  item: string; 
  completed: boolean;
}
