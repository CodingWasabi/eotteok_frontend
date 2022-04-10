import client from '@/lib/api/client';

export const validateNickname = (nickname: string) => client.get(`/validation/nickname?value=${nickname}`);
