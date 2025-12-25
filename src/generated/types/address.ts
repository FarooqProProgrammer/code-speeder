import { UserModel, UserCreateInput } from "./user";

export interface AddressModel {
  id: string;
  location: string | null;
  country: string | null;
  city: string | null;
  createdAt: string;
  updatedAt: string;
  userId: string | null;
  user?: UserModel;
}

export interface AddressCreateInput {
  id?: string;
  location?: string | null;
  country?: string | null;
  city?: string | null;
  createdAt?: string;
  updatedAt?: string;
  userId?: string | null;
  user?: UserCreateInput;
}

export type AddressUpdateInput = Partial<AddressCreateInput>;

