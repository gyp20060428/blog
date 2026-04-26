// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 注意：暂时移除 cloudflare 适配器导入
// import cloudflare from '@astrojs/cloudflare'; 

export default defineConfig({
  // 1. 强制设为静态模式
  output: 'static',

  integrations: [
    starlight({
      title: '仰望星空——征服者的个人博客',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/gyp20060428' }
      ],
      sidebar: [
        { label: 'Guides', items: [{ label: 'Example Guide', slug: 'guides/example' }] },
        { label: 'Reference', autogenerate: { directory: 'reference' } },
      ],
    }),
  ],

  // 2. 暂时注释掉 adapter。对于 Pages 静态部署，其实不需要这个适配器也能跑
  // adapter: cloudflare(), 
});