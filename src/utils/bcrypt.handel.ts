import { compare } from 'bcryptjs';

const verifyPassword = async (pass: string, passHash: string) => {
   const isCorrect = await compare(pass, passHash);
   return isCorrect;
};

export { verifyPassword };
