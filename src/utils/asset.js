/**
 * Resolves static asset paths relative to the configured Vite BASE_URL.
 * Ensures images resolve correctly on GitHub Pages (/inspiral/) and local dev (/).
 */
export function asset(path) {
   if (!path) return '';
   if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
      return path;
   }
   const clean = path.startsWith('/') ? path.slice(1) : path;
   const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
   return `${base}${clean}`;
}
