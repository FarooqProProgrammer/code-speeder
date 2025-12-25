export const Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
} as const;
export type Role = keyof typeof Role;

export const SubscriptionStatus = {
  INCOMPLETE: 'INCOMPLETE',
  INCOMPLETE_EXPIRED: 'INCOMPLETE_EXPIRED',
  TRIALING: 'TRIALING',
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
  UNPAID: 'UNPAID',
  PAUSED: 'PAUSED'
} as const;
export type SubscriptionStatus = keyof typeof SubscriptionStatus;

export const BillingInterval = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR'
} as const;
export type BillingInterval = keyof typeof BillingInterval;

export const BlogStatus = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  SCHEDULED: 'SCHEDULED',
  ARCHIVED: 'ARCHIVED',
  REVIEW: 'REVIEW'
} as const;
export type BlogStatus = keyof typeof BlogStatus;

export const BlogVisibility = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  PASSWORD_PROTECTED: 'PASSWORD_PROTECTED'
} as const;
export type BlogVisibility = keyof typeof BlogVisibility;

export const CategoryStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
} as const;
export type CategoryStatus = keyof typeof CategoryStatus;

export const ProjectStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
} as const;
export type ProjectStatus = keyof typeof ProjectStatus;

export const ScriptType = {
  INLINE: 'INLINE',
  EXTERNAL: 'EXTERNAL',
  MODULE: 'MODULE',
  WORKER: 'WORKER',
  SERVICE_WORKER: 'SERVICE_WORKER'
} as const;
export type ScriptType = keyof typeof ScriptType;

