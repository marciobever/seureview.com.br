import { NextResponse } from 'next/server';

export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://seureview.com.br';
  const urls = [
    { loc: `${base}/`, priority: 1.0 },
    { loc: `${base}/terms`, priority: 0.3 },
    { loc: `${base}/privacy`, priority: 0.3 },
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        (u) =>
          `<url><loc>${u.loc}</loc><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`
      )
      .join('') +
    `</urlset>`;

  return new NextResponse(xml, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
}
