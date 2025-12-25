import { BlogMetaModel, BlogMetaCreateInput } from "./blog-meta";

export interface BlogModel {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogMetas?: BlogMetaModel[];
}

export interface BlogCreateInput {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  blogMetas?: BlogMetaCreateInput[];
}

export type BlogUpdateInput = Partial<BlogCreateInput>;

