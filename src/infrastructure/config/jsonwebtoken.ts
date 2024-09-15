import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {generateTokenAuthModel} from "../../domain/models/auth-model";

dotenv.config();

const secret = process.env.JWT_SECRET || 'segundaclavedc';
const timeExpires = process.env.JWT_EXPIRES_IN || '43200s';

export function generateTokenAuth(payload: generateTokenAuthModel): string {
    return jwt.sign(payload, secret, {
        expiresIn: timeExpires,
    });
}
export function verifyTokenAuth(token: string): string | jwt.JwtPayload | null {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null
    }
}

