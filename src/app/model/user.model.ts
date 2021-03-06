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

export interface Entity {
    id: number;
    userName: string;
    password: string;
    email: string;
    active: boolean;
    userModifyId: number;
}

export interface ForList {
    id: number;
    email: string;
    active: boolean;
}
