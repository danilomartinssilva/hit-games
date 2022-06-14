import mongoose, { Document, Model, Schema } from 'mongoose';
export type TeamAttributes = {
  _id?: string;
  name: string;
  position:string;
  height: number
  weight: number;
};

export type TeamDocument = Document & TeamAttributes;

type TeamModel = Model<TeamDocument>;

const TeamSchema = new Schema(
  {

    name: { type: String, required: true },
    position: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },

  },
  {
    collection: 'team',
    strict: true,
    timestamps: true,
  },
);

const TeamMongoose = mongoose.model<TeamDocument, TeamModel>(
  'Team',
  TeamSchema,
);

export default TeamMongoose;
