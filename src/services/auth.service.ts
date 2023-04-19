import { Auth } from '../interfaces/Auth.interface';
import { UserModel } from '../models/User.models';
import { verifyPassword } from '../utils/bcrypt.handel';
import { generateToken } from '../utils/jwt.handle';

const loginUser = async ({ email, password }: Auth) => {
   const isUser = await UserModel.findOne({ email });

   if (!isUser) return 'USER_NOT_FOUND';

   const passwordHash = isUser.password;
   const isCorrectPass = await verifyPassword(password, passwordHash);
   if (!isCorrectPass) return 'INCORRECT_PASSWORD';

   const token = generateToken(email);
   const data = { token, user: isUser.email };
   return data;
};

export { loginUser };
