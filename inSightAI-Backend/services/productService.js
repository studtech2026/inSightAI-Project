import Product from "../models/Product.js";
import ApiError from "../utils/ApiError.js";
import notificationService from "./notificationService.js";

class ProductService {
  getStatus(stock) {
    if (stock <= 0) return "Out of Stock";
    if (stock <= 10) return "Low Stock";
    return "In Stock";
  }

  async createProduct(userId, data) {
    const product = await Product.create({
      ...data,
      userId,
      stock: Number(data.stock),
      price: Number(data.price),
      status: this.getStatus(Number(data.stock)),
    });

    await notificationService.createNotification(userId, {
      title: "Product Added",
      message: `${product.name} was added successfully.`,
      type: "success",
    });

    return product;
  }

  async getProducts(userId) {
    return await Product.find({ userId }).sort({
      createdAt: -1,
    });
  }

  async getProductById(id, userId) {
    const product = await Product.findOne({
      _id: id,
      userId,
    });

    if (!product) {
      throw new ApiError(404, "Product not found.");
    }

    return product;
  }

  async updateProduct(id, userId, data) {
    data.stock = Number(data.stock);
    data.price = Number(data.price);
    data.status = this.getStatus(data.stock);

    const product = await Product.findOneAndUpdate(
      {
        _id: id,
        userId,
      },
      data,
      {
        new: true,
      }
    );

    if (!product) {
      throw new ApiError(404, "Product not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Product Updated",
      message: `${product.name} was updated successfully.`,
      type: "info",
    });

    return product;
  }

  async deleteProduct(id, userId) {
    const product = await Product.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!product) {
      throw new ApiError(404, "Product not found.");
    }

    await notificationService.createNotification(userId, {
      title: "Product Deleted",
      message: `${product.name} was deleted.`,
      type: "warning",
    });

    return null;
  }
}

export default new ProductService();