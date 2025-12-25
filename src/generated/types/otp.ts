import { UserModel, UserCreateInput } from "./user";

export interface OtpModel {
  id: string;
  otpCode: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user?: UserModel;
}

export interface OtpCreateInput {
  id?: string;
  otpCode: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: UserCreateInput;
}

export type OtpUpdateInput = Partial<OtpCreateInput>;

