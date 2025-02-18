import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">404</h1>
        <p className="text-lg text-white mt-2">Page Not Found</p>
        <p className="text-sm text-white mt-1">The page you're looking for does not exist.</p>
      </div>
    </div>
  );
}
