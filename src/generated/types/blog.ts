import { BlogStatus, BlogVisibility } from "./enums";
import { UserModel, UserCreateInput } from "./user";
import { BlogMetaModel, BlogMetaCreateInput } from "./blog-meta";
import { BlogCategoryModel, BlogCategoryCreateInput } from "./blog-category";
import { BlogTagModel, BlogTagCreateInput } from "./blog-tag";

export interface BlogModel {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featuredImageUrl: string | null;
  status: BlogStatus;
  visibility: BlogVisibility;
  publishedAt: string | null;
  scheduledAt: string | null;
  viewCount: number;
  readingTime: number | null;
  allowComments: boolean;
  isFeatured: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author?: UserModel;
  blogMeta?: BlogMetaModel;
  categories?: BlogCategoryModel[];
  tags?: BlogTagModel[];
}

export interface BlogCreateInput {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  featuredImageUrl?: string | null;
  status?: BlogStatus;
  visibility?: BlogVisibility;
  publishedAt?: string | null;
  scheduledAt?: string | null;
  viewCount?: number;
  readingTime?: number | null;
  allowComments?: boolean;
  isFeatured?: boolean;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  authorId?: string;
  author?: UserCreateInput;
  blogMeta?: BlogMetaCreateInput;
  categories?: BlogCategoryCreateInput[];
  tags?: BlogTagCreateInput[];
}

export type BlogUpdateInput = Partial<BlogCreateInput>;

