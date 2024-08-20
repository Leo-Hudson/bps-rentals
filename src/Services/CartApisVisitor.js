"use server";
const baseUrl = process.env.BASE_URL;

export const createCart = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/cart-visitor/create`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.cart;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const getProductsCartVisitor = async (cartId) => {
  try {
    const response = await fetch(`${baseUrl}/api/cart-visitor/get`, {
      method: "POST",
      body: JSON.stringify(cartId),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.cart.lineItems;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const AddProductToCartVisitor = async (cartId, productData) => {
  try {
    const payload = { cartId, productData }
    const response = await fetch(`${baseUrl}/api/cart-visitor/add`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProductsQuantityCartVisitor = async (cartId, lineItems) => {
  try {
    const payload = {
      cartId,
      lineItems,
    };

    const response = await fetch(`${baseUrl}/api/cart-visitor/updateQuantity`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeProductFromCartVisitor = async (cartId, lineItemIds) => {
  try {
    const payload = {
      cartId,
      lineItemIds,
    };
    const response = await fetch(`${baseUrl}/api/cart-visitor/remove`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
