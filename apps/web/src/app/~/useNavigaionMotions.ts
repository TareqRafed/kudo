'use client';

import { useRouter } from 'next/navigation';
import { addMotion } from '@/hooks/useMotions';
import { useEffect } from 'react';

let motionsAdded = false;

export const useNavigationMotions = () => {
  const router = useRouter();

  useEffect(() => {
    if (motionsAdded) return;
    motionsAdded = true;

    // go projects
    addMotion(['g', 'p'], () => router.push('/~'));
    // go settings
    addMotion(['g', 's'], () => router.push('/~/settings'));
    // go invitations
    addMotion(['g', 'i'], () => router.push('/~/settings/invitations'));
  }, [router.push]);
};
