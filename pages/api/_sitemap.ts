const globby = require('globby');
const prettier = require('prettier');

const axios = require('axios');

import type { NextApiRequest, NextApiResponse } from 'next';

const DOMAIN = 'https://www.toktokhan.dev';

// sitemap 생성시 제외할 라우트의 목록입니다.
const FORBIDDEN = ['/signup', '/login', '/example'].map(
  (route) => `!**${route}`,
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    /**
     * localRoutes: pages 폴더 내 파일을 기준으로 만듭니다.
     */
    const localFiles: string[] = await globby([
      'pages/**/*.{js,tsx}',
      '!pages/_*.{js,tsx}',
      '!pages/**/[*.{js,tsx}',
      '!pages/api',
      ...FORBIDDEN,
    ]);

    const localRoutes = localFiles.map((file) => {
      const route = file
        .replace('pages', '')
        .replace(/.tsx|.js/, '')
        .replace(/\/index/g, '');
      return route;
    });

    /**
     * externalRoutes: 백엔드 서버로 부터 받아옵니다.
     * 해당 프로젝트에 맞게 수정해야하는 부분입니다. 하나 이상의 api 호출이 필요할 수도 있습니다.
     */
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    const externalRoutes = data.map((item: any) => `/indoor/${item.id}`);

    /**
     * localRoutes와 externalRoutes를 합하여 전체 routes를 구성합니다.
     */
    const routes = [...localRoutes, ...externalRoutes];

    const urlSet = routes
      .map((route) => {
        return `
        <url>
            <loc>${`${DOMAIN}${route}`}</loc>
        </url>
        `;
      })
      .join('');

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlSet}
    </urlset>
    `;

    const formatted = prettier.format(sitemap, { parser: 'html' });

    // set response content header to xml
    res.setHeader('Content-Type', 'text/xml');
    // write the sitemap
    res.write(formatted);
    res.end();
  } catch (error) {
    res.status(500).json({ error });
  }
};
