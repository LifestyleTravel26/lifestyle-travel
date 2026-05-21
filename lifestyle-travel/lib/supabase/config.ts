export const PREMIUM_ROUTES = [
  '/work-and-study',
  '/work-and-holidays',
  '/nomada-digital',
  '/au-pair',
  '/pet-sitting',
  '/voluntariado',
] as const;

export function isPremiumRoute(pathname: string): boolean {
  return PREMIUM_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

export const AUTH_ROUTES = ['/login', '/signup'] as const;

export function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}
