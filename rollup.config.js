import { createDefaultConfig } from '@open-wc/building-rollup';
import { cpy } from 'rollup-plugin-cpy';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const config = createDefaultConfig({ input: './index.html' });

export default [
  {
    ...config[0],
    plugins: [
      ...config[0].plugins,
      cpy({
        files: ['manifest.json', 'assets/**/*'],
        dest: 'dist',
        options: {
          parent: true,
        },
      }),
    ],
  },

  config[1],
];
