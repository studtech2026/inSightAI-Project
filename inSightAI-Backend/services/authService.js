import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import ApiError from "../utils/ApiError.js";

class AuthService {
  /**
   * Register User
   */
  async register(userData) {
    const { name, email, password } = userData;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(400, "User already exists.");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        theme: user.theme,
        createdAt: user.createdAt,
      },
    };
  }

  /**
   * Login User
   */
  async login(loginData) {
    const { email, password } = loginData;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const token = generateToken(user._id);

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        theme: user.theme,
        createdAt: user.createdAt,
      },
    };
  }

  /**
   * Get Profile
   */
  async getProfile(userId) {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      theme: user.theme,
      createdAt: user.createdAt,
    };
  }

  /**
   * Update Profile
   */
  async updateProfile(userId, updateData) {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    const { name, theme } = updateData;

    if (name) {
      user.name = name;
    }

    if (theme) {
      user.theme = theme;
    }

    await user.save();

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      theme: user.theme,
      createdAt: user.createdAt,
    };
  }
}

export default new AuthService();