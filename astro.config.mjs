// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // 核心：明确指定为静态模式，这能解决大部分 SSR 相关的本地报错
  output: 'static', 

  integrations: [
    starlight({
      title: '仰望星空——征服者的个人博客',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/gyp20060428' }
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [{ label: 'Example Guide', slug: 'guides/example' }],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // 这里的配置微调
  adapter: cloudflare({
    imageService: 'passthrough' 
  }),
});