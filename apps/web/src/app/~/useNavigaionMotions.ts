import { useRouter } from 'next/navigation';
import { addMotion } from '@/hooks/useMotions';

export const useNavigationMotions = () => {
  const router = useRouter();

  // go projects
  addMotion(['g', 'p'], () => router.push('/~'));
  // go settings
  addMotion(['g', 's'], () => router.push('/~/settings'));
  // go invitations
  addMotion(['g', 'i'], () => router.push('/~/settings/invitations'));
};
