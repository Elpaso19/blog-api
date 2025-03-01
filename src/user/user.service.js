import User from "./user.schema.js"



export const createUser = async (payload) => {
  return await User.create(payload);
};


export const findUser = async (payload) => {
  return await User.findOne(payload);
};


export const findUserById = async (payload) => {
  return await User.findById({ id: payload.id });
};


export const findUserByEmail = async (payload) => {
  return await User.findOne({email:payload.email})
};

export const findUserByUsername= async(payload)=>{
  return await User.findOne({username:payload.username})
}


export const updateUser = async (payload) => {
  return await findAndUpdate(payload.id, payload, { new: true });
};


export const deleteUser = async (payload) => {
  return await findAndDelete(payload.id);
};
