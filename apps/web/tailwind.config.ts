import baseConfig from '@kudo/tailwind-config';
import { withUI } from '@kudo/ui';

export default withUI({
  ...baseConfig,
  content: ['src/**/*.{ts,tsx}'],
});
