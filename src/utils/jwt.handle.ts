import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';

const generateToken = (email: string) => {
   const jwt = sign({ email }, JWT_SECRET, { expiresIn: '90d' });
   return jwt;
};

const verifyToken = (token: string) => {
   const jwtPayload = verify(token, JWT_SECRET);
   return jwtPayload;
};

export { generateToken, verifyToken };
