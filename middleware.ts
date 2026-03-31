import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'es', 'en', 'ar'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si la ruta es la raíz directamente, redirigimos a /fr
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Verificamos si la ruta actual tiene un locale soportado
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Si no tiene un locale, redirige (opcional, actualmente solo para la raíz, pero protege 404s en nivel top)
  // ej: /about -> /fr/about
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Evitar las rutas de aserciones de api, next static, next image y favicon
    '/((?!api|_next/static|_next/image|favicon.ico|assets|images).*)',
  ],
};
