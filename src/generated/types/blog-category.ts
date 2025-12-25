import { CategoryStatus } from "./enums";
import { BlogCategoryModel, BlogCategoryCreateInput } from "./blog-category";
import { BlogModel, BlogCreateInput } from "./blog";

export interface BlogCategoryModel {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  status: CategoryStatus;
  parentId: string | null;
  parent?: BlogCategoryModel;
  children?: BlogCategoryModel[];
  postCount: number;
  createdAt: string;
  updatedAt: string;
  blogs?: BlogModel[];
}

export interface BlogCategoryCreateInput {
  id?: string;
  name: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  status?: CategoryStatus;
  parentId?: string | null;
  parent?: BlogCategoryCreateInput;
  children?: BlogCategoryCreateInput[];
  postCount?: number;
  createdAt?: string;
  updatedAt?: string;
  blogs?: BlogCreateInput[];
}

export type BlogCategoryUpdateInput = Partial<BlogCategoryCreateInput>;

