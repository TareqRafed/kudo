import { useSendMessage } from './useSendMessage';

const userColorMap = new Map<string | number, string>();

const useUserColor = (userId: string | number) => {
  const { data: res } = useSendMessage({ action: 'RPC', payload: 'get_members_with_metadata', args: {} });

  res?.data?.data?.forEach(member => {
    userColorMap.set(member.id, member.color_hex);
  });

  if (!userColorMap.has(userId)) {
    console.warn("User wasn't detected", userId);
    return '#000';
  }

  return userColorMap.get(userId);
};

export default useUserColor;
