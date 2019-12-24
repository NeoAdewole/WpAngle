export class User {
    id: number;
    username: string;
    role: string;
    firstName: string;
    lastName: string;
    nickname: string;
    displayName: string;
    email: string;
    website: string;
    bio: string;
    profilePicture: string;
    isLoggedIn() {
        console.log('return true or false after token check');
    }
}
