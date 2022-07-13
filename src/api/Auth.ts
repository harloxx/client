import AuthServices from '../services/Auth/AuthServices';
import { SignupUser, User } from '../types/auth';

export const AuthenticateUser = async (user: User) => {
  try {
    const res = await AuthServices.postSignin(user);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const AuthenticateSuccess = async () => {
  try {
    const res = await AuthServices.getSignin();
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const LogOut = async () => {
  try {
    const res = await AuthServices.getLogout();
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

export const Register = async (SignupUser: SignupUser) => {
  try {
    const res = await AuthServices.postSignUp(SignupUser);
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};
