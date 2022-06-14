import mongoose, { Document, Model, Schema } from 'mongoose';
export type TeamAttributes = {
  _id?: string;
  name: string;
  state:string;
  birthday:Date
};

export type TeamDocument = Document & TeamAttributes;

type TeamModel = Model<TeamDocument>;

const TeamSchema = new Schema(
  {

    name: { type: String, required: true },
    birthday: {type:Date,required:true},
    state:{type:String,required:true},
    players: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Player',
      },
    ],

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
