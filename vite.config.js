import { defineConfig } from 'vite';
import { resolve } from 'path';

const apps = ['admin', 'manager', 'trainer', 'student'];

// /admin -> /admin/ so relative assets (manifest, icons, sw.js) resolve correctly
const slashRedirect = () => {
  const mw = (req, res, next) => {
    const path = (req.url || '').split('?')[0];
    if (apps.some((a) => path === '/' + a)) {
      res.statusCode = 301;
      res.setHeader('Location', path + '/' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : ''));
      return res.end();
    }
    next();
  };
  return {
    name: 'slash-redirect',
    configureServer(s) { s.middlewares.use(mw); },
    configurePreviewServer(s) { s.middlewares.use(mw); },
  };
};

export default defineConfig({
  plugins: [slashRedirect()],
  server: { host: '0.0.0.0', port: 5173, allowedHosts: ['.trycloudflare.com'] },
  preview: { host: '0.0.0.0', allowedHosts: ['.trycloudflare.com'] },
  appType: 'mpa',
  build: {
    rollupOptions: {
      // Build only the public website. Existing demo portal source folders remain
      // in the project but are intentionally not published as production pages.
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
