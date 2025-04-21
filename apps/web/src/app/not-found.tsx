'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/en/not-found');
  }, [router]);

  return (
    <html lang="en">
      <body />
    </html>
  );
}
