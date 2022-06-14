import mongoose, { Document, Model, Schema } from 'mongoose';
export type PlayerAttributes = {
  _id?: string;
  name: string;
  birthday:Date;
  state:string;
};

export type PlayerDocument = Document & PlayerAttributes;

type TeamModel = Model<PlayerDocument>;

const PlayerSchema = new Schema(
  {

    name: { type: String, required: true },
    state: { type: String, required: true },
    birthday: { type: Date, required: true },


  },
  {
    collection: 'player',
    strict: true,
    timestamps: true,
  },
);

const PlayerMongoose = mongoose.model<PlayerDocument, TeamModel>(
  'Player',
  PlayerSchema,
);

export default PlayerMongoose;
