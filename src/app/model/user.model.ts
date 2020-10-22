export interface UserLogin {
    username: string;
    password: ArrayBuffer;
}

export interface UserChangePassword{
    username: string;
    oldpassword: string;
    newpassword: string;
}

export interface UserAuthentication {
    id: number;
    username: string;
    email: string;
    active: boolean;
}
