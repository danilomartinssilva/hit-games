import mongoose, { Document, Model, Schema } from 'mongoose';
export type PlayerAttributes = {
  _id?: string;
  position:string;
  wheight:number;
  height:number;
  name:string;

};

export type PlayerDocument = Document & PlayerAttributes;

type PlayModel = Model<PlayerDocument>;

const PlayerSchema = new Schema(
  {

    name: { type: String, required: true },
    wheight: { type: Number, required: true },
    height: { type: Number, required: true },
    position:{type:String,required:true}


  },
  {
    collection: 'player',
    strict: true,
    timestamps: true,
  },
);

const PlayerMongoose = mongoose.model<PlayerDocument, PlayModel>(
  'Player',
  PlayerSchema,
);

export default PlayerMongoose;
