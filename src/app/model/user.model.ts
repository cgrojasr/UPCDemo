export interface UserAuthentication {
    userName: string;
    password: string;
}

export interface UserChangePassword{
    userName: string;
    oldpassword: string;
    newpassword: string;
}

export interface UserLogin {
    id: number;
    userName: string;
    password: string;
    email: string;
    active: boolean;
}
