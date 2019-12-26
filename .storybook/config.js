
//import 'scss/main.scss'

import { configure, addParameters } from '@storybook/react';
import theme from './customTheme'

// Option defaults.
addParameters({
  options: {
		theme
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.(js|mdx)$/), module);
