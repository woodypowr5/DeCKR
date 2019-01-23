export interface User {
    id: number;
    passwordHash: string;
    salt: string;
}