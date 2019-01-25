export declare class AuthModule {
    loggedInUserId: string;
    constructor();
    login(username: string, password: string): string;
    logout(): void;
    isAuthenticated(userId: string): boolean;
    private authenticate;
}
