import client from '@/lib/api/client';

import { RegisterEventProps } from '@/types/event';

export const registerEvent = ({ name, phoneNumber, img }: RegisterEventProps) =>
  client
    .post('/event', {
      name,
      phoneNumber,
      img,
    })
    .then((res) => res.data);

export const uploadImage = (image: FormData) => client.post('/event/image', image).then((res) => res.data);
