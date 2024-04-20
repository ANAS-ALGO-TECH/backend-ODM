import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      deafult: 0,
      required: true,
    },
    stock: {
      type: Number,
      deafult: 0,
      required: true,
    },
    productImage: {
      type: String,
    },
    category: {
      type: mongoose.Scheam.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Scheam.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timeStamps: true }
);

export const Product = mongoose.model('Product', productSchema);
