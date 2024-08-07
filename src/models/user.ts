export interface IUser {
  firstName?: string
  lastName?: string,
  email?: string,
  phoneNumber?: string
  address?: string
}

export interface ILogin {
  email?: string,
  password?: string
}

export interface IRegister {
  fullName?: string
  email?: string,
  password?: string,
  confirmPassword?: string
  address?: string
  phoneNumber?: string
}

export interface IChangePassword {
  email: string,
  confirmPassword?: string,
  newPassword?: string
}

export interface IUpdateUser {
  avatar?: string
  email?: string,
  fullName?: string
}