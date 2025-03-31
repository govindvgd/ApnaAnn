import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

// Add token to requests if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// User related API calls
export const userService = {
  register: (userData) => API.post('/users/register', userData),
  updateProfile: (userData) => API.put('/users/me', userData),
  getProfile: () => API.get('/users/me')
};

// Auth related API calls
export const authService = {
  sendOtp: (phoneNumber) => API.post('/auth/send-otp', { phoneNumber }),
  verifyOtp: (phoneNumber, otp) => API.post('/auth/verify-otp', { phoneNumber, otp }),
  logout: () => API.post('/auth/logout')
};

// Product related API calls
export const productService = {
  getAllProducts: () => API.get('/products'),
  getProductById: (id) => API.get(`/products/${id}`),
  createProduct: (productData) => API.post('/products', productData),
  updateProduct: (id, productData) => API.put(`/products/${id}`, productData),
  deleteProduct: (id) => API.delete(`/products/${id}`),
  
  // For farmer specific products
  getMyProducts: () => API.get('/products/my-products')
};

// Order related API calls
export const orderService = {
  createOrder: (orderData) => API.post('/orders', orderData),
  getMyOrders: () => API.get('/orders/my-orders'),
  getOrderById: (id) => API.get(`/orders/${id}`),
  updateOrderStatus: (id, status) => API.put(`/orders/${id}/status`, { status })
};

export default {
  user: userService,
  auth: authService,
  product: productService,
  order: orderService
};