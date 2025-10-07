import { NextResponse } from 'next/server';

export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://seureview.com.br';
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap.xml`,
  ].join('\n');

  return new NextResponse(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
