import { Role } from "./enums";
import { OtpModel, OtpCreateInput } from "./otp";
import { ImageModel, ImageCreateInput } from "./image";
import { AddressModel, AddressCreateInput } from "./address";
import { SubscriptionModel, SubscriptionCreateInput } from "./subscription";
import { BlogModel, BlogCreateInput } from "./blog";
import { ProjectModel, ProjectCreateInput } from "./project";

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
  subscriptions?: SubscriptionModel[];
  blogs?: BlogModel[];
  projects?: ProjectModel[];
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
  subscriptions?: SubscriptionCreateInput[];
  blogs?: BlogCreateInput[];
  projects?: ProjectCreateInput[];
}

export type UserUpdateInput = Partial<UserCreateInput>;

