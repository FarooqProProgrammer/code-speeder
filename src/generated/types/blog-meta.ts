import { BlogModel, BlogCreateInput } from "./blog";

export interface BlogMetaModel {
  id: string;
  MetaTitle: string | null;
  MetaDescription: string | null;
  CanonicalSection: string | null;
  createdAt: string;
  updatedAt: string;
  blogId: string;
  blog?: BlogModel;
}

export interface BlogMetaCreateInput {
  id?: string;
  MetaTitle?: string | null;
  MetaDescription?: string | null;
  CanonicalSection?: string | null;
  createdAt?: string;
  updatedAt?: string;
  blogId?: string;
  blog?: BlogCreateInput;
}

export type BlogMetaUpdateInput = Partial<BlogMetaCreateInput>;

