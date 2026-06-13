// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.yangwangxingkong.top',
	integrations: [
		starlight({
			title: '仰望星空',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/gyp20060428' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '资源分享',
					items: [
						{ label: '概览', slug: 'resources' },
						{
							label: '教材分享',
							collapsed: true,
							items: [
								{ label: '数学', slug: 'resources/textbooks/math' },
								{ label: '物理', slug: 'resources/textbooks/physics' },
								{ label: '电子信息', slug: 'resources/textbooks/electronics' },
								{ label: '计算机', slug: 'resources/textbooks/computer' },
								{ label: '电气·自动化', slug: 'resources/textbooks/engineering' },
							],
						},
						{
							label: '课程分享',
							collapsed: true,
							items: [
								{ label: '数学', slug: 'resources/course/math' },
								{ label: '物理', slug: 'resources/course/physics' },
								{ label: '电子信息', slug: 'resources/course/electronics' },
								{ label: '计算机', slug: 'resources/course/computer' },
								{ label: '电气·自动化', slug: 'resources/course/engineering' },
							],
						},
						{ label: '资源下载', slug: 'resources/download' },
					],
				},
				{
					label: '更多',
					items: [
						{ label: '开发日志', slug: 'logs' },
					],
				},
			],
		}),
	],
});
