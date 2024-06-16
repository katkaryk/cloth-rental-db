// controllers/cartController.js

import Cart from '../models/Cart.js';

export const addToCart = async (req, res) => {
  const { cartItems, totalAmount, userId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create new cart if not exists
      cart = new Cart({ userId, items: cartItems, totalAmount });
    } else {
      // Update existing cart
      cart.items.push(...cartItems);
      cart.totalAmount += totalAmount;
    }

    await cart.save();
    res.status(200).json({ message: 'Items added to cart', cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  const { userId } = req.params; // Assuming userId is passed as a parameter in the route
  
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};