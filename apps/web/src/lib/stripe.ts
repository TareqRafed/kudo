import Stripe from 'stripe';
import { env } from './env';

export const productsCatalogue = {
  pro: {
    monthly: env.NODE_ENV === 'production' ? 'price_1R2dSJIGjRTzW5c6lqie5s9M' : 'price_1R5KtvIGjRTzW5c6MEOG4yqK',
    annual: env.NODE_ENV === 'production' ? 'price_1R5mzJIGjRTzW5c6HXcb5EZW' : 'price_1R5mwOIGjRTzW5c6lLz9T4Li',
  },
};

export const stripe = new Stripe(env.STRIPE_API_KEY);
