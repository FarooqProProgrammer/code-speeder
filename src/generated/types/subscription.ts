import { SubscriptionStatus, BillingInterval } from "./enums";
import { UserModel, UserCreateInput } from "./user";

export interface SubscriptionModel {
  id: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  stripePriceId: string;
  stripeProductId: string | null;
  status: SubscriptionStatus;
  planName: string | null;
  planInterval: BillingInterval;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  canceledAt: string | null;
  cancelAt: string | null;
  trialStart: string | null;
  trialEnd: string | null;
  quantity: number;
  currency: string;
  amount: number;
  metadata: any | null;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user?: UserModel;
}

export interface SubscriptionCreateInput {
  id?: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  stripePriceId: string;
  stripeProductId?: string | null;
  status?: SubscriptionStatus;
  planName?: string | null;
  planInterval?: BillingInterval;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd?: boolean;
  canceledAt?: string | null;
  cancelAt?: string | null;
  trialStart?: string | null;
  trialEnd?: string | null;
  quantity?: number;
  currency?: string;
  amount: number;
  metadata?: any | null;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: UserCreateInput;
}

export type SubscriptionUpdateInput = Partial<SubscriptionCreateInput>;

