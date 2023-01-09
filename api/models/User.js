import Mongoose from 'mongoose';

export const UserSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

// export const UserUpdateSchema = new Mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     minlength: 6,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//     minlength: 3,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
// });

export const UserModel = Mongoose.model('user', UserSchema);
