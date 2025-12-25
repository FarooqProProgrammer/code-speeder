import { UserModel, UserCreateInput } from "./user";

export interface ImageModel {
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user?: UserModel;
}

export interface ImageCreateInput {
  id?: string;
  url: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: UserCreateInput;
}

export type ImageUpdateInput = Partial<ImageCreateInput>;

