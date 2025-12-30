import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
    extensions: ['.md', '.svx'],
    layout: {
        publications: 'src/lib/layouts/PublicationLayout.svelte',
        _: 'src/lib/layouts/DefaultLayout.svelte'
    },
    remarkPlugins: [remarkGfm, remarkFrontmatter]
};

export default config;
