import mongoose from "mongoose";

export async function connect(){
  try {
    await mongoose.connect('mongodb+srv://filid:QPGyBJGb2CuQE0tV@filid.nnrqx86.mongodb.net/eventos');
    console.log('Logado no database')
  } catch (error) {
    console.log('Error na conexão');
  }
}