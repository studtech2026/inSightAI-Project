import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../utils/constants.js";

class UserService {
  async getProfile(userId) {
    const user = await User.findById(userId).select(
      "-password"
    );

    if (!user) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "User not found."
      );
    }

    return user;
  }

  async updateProfile(userId, data) {
    const { name, email } = data;

    const existingUser = await User.findOne({
      email,
      _id: { $ne: userId },
    });

    if (existingUser) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        "Email already exists."
      );
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    return user;
  }

  async changePassword(userId, data) {
    const {
      currentPassword,
      newPassword,
    } = data;

    const user = await User.findById(userId).select(
      "+password"
    );

    if (!user) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "User not found."
      );
    }

    const isMatch =
      await user.comparePassword(
        currentPassword
      );

    if (!isMatch) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        "Current password is incorrect."
      );
    }

    user.password = newPassword;

    await user.save();

    return null;
  }
}

export default new UserService();