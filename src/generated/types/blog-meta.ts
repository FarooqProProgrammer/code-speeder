import { BlogModel, BlogCreateInput } from "./blog";

export interface BlogMetaModel {
  id: string;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImageUrl: string | null;
  twitterCard: string;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImageUrl: string | null;
  focusKeyword: string | null;
  schema: any | null;
  createdAt: string;
  updatedAt: string;
  blogId: string;
  blog?: BlogModel;
}

export interface BlogMetaCreateInput {
  id?: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  canonicalUrl?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImageUrl?: string | null;
  twitterCard?: string;
  twitterTitle?: string | null;
  twitterDescription?: string | null;
  twitterImageUrl?: string | null;
  focusKeyword?: string | null;
  schema?: any | null;
  createdAt?: string;
  updatedAt?: string;
  blogId?: string;
  blog?: BlogCreateInput;
}

export type BlogMetaUpdateInput = Partial<BlogMetaCreateInput>;

