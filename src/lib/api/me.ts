import client from '@/lib/api/client';

export const getMe = () => client.get('/me').then((res) => res.data);

export const resetMe = () => client.delete('/me');
