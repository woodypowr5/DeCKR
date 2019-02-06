export class AuthModule {
    loggedInUserId: string;

    constructor() {
        
    }

    login(username: string, password: string): string {
        console.log("AuthModule: logging in as user1 (for demo)");
        this.loggedInUserId = this.authenticate("user1", password);
        return this.loggedInUserId;
    }

    logout() {
        this.loggedInUserId = undefined;
    }

    isAuthenticated(userId: string) {
        return this.loggedInUserId === userId; 
    }

    private authenticate(username: string, password: string) {
        // call out to server here
        console.log("logged in as " + username);
        return username;
    }
}