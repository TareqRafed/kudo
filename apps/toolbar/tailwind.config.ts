import baseConfig from '@kudo/tailwindcss-config';
import { withUI } from '@kudo/ui';

export default withUI({
  ...baseConfig,
  content: ['src/**/*.{ts,tsx}'],
});
