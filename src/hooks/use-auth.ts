import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function useRequireAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return { session: null, loading: true };
  }

  if (!session) {
    redirect("/login");
  }

  return { session, loading: false };
}

export function useRequireRole(role: string) {
  const { session, loading } = useRequireAuth();

  if (loading) {
    return { session: null, loading: true };
  }

  if (session?.user?.role !== role) {
    redirect("/dashboard");
  }

  return { session, loading: false };
}
