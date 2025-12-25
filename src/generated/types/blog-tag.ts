import { BlogModel, BlogCreateInput } from "./blog";

export interface BlogTagModel {
  id: string;
  name: string;
  slug: string;
  postCount: number;
  createdAt: string;
  updatedAt: string;
  blogs?: BlogModel[];
}

export interface BlogTagCreateInput {
  id?: string;
  name: string;
  slug: string;
  postCount?: number;
  createdAt?: string;
  updatedAt?: string;
  blogs?: BlogCreateInput[];
}

export type BlogTagUpdateInput = Partial<BlogTagCreateInput>;

