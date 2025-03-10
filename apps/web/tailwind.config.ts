import { withUI } from '@kudo/ui';
import baseConfig from '@kudo/ui/tailwind.config';

export default withUI({
  ...baseConfig,
  content: ['src/**/*.{ts,tsx}'],
});
