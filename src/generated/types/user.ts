import { Role } from "./enums";
import { OtpModel, OtpCreateInput } from "./otp";
import { ImageModel, ImageCreateInput } from "./image";
import { AddressModel, AddressCreateInput } from "./address";

export interface UserModel {
  id: string;
  email: string;
  name: string | null;
  password: string;
  role: Role;
  is_delete: boolean;
  createdAt: string;
  updatedAt: string;
  otps?: OtpModel[];
  images?: ImageModel[];
  addresses?: AddressModel[];
}

export interface UserCreateInput {
  id?: string;
  email: string;
  name?: string | null;
  password: string;
  role?: Role;
  is_delete?: boolean;
  createdAt?: string;
  updatedAt?: string;
  otps?: OtpCreateInput[];
  images?: ImageCreateInput[];
  addresses?: AddressCreateInput[];
}

export type UserUpdateInput = Partial<UserCreateInput>;

