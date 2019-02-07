export class AuthModule {
    loggedInUserId: string;

    constructor() {
        
    }

    login(username: string, password: string): string {
        if (username !== "") {
            this.loggedInUserId = this.authenticate(username, password);
        } else {
            this.loggedInUserId = this.authenticate("user1", password);
        }
        return this.loggedInUserId;
    }

    logout() {
        this.loggedInUserId = undefined;
    }

    isAuthenticated(userId: string) {
        return this.loggedInUserId === userId; 
    }

    private authenticate(userId: string, password: string) {
        return userId; // simplified for demo
    }
}