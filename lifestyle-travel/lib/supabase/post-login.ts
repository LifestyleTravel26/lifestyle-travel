import type { SupabaseClient } from '@supabase/supabase-js';

// Sin compra registrada -> /pricing; con compra -> al destino original.
export async function getPostLoginPath(
  supabase: SupabaseClient,
  redirectTo: string
): Promise<string> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user?.email) return redirectTo;

    const { data } = await supabase
      .from('purchases')
      .select('id')
      .ilike('email', user.email.trim().replace(/[\\%_]/g, '\\$&'))
      .limit(1);

    return data && data.length > 0 ? redirectTo : '/pricing';
  } catch {
    return redirectTo; // ante un error, no bloquear
  }
}
