const PRODUCT_KEY = "ecom_products";
const ORDER_KEY = "ecom_orders";

export const getProducts = () => {
  return JSON.parse(localStorage.getItem(PRODUCT_KEY)) || [];
};

export const addProduct = (product) => {
  const products = getProducts();
  products.push(product);
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
};

export const getOrders = () => {
  return JSON.parse(localStorage.getItem(ORDER_KEY)) || [];
};

export const addOrder = (order) => {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
};
