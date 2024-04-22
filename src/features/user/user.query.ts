import {useQuery} from '@tanstack/react-query';
import {client} from '../../services/axios';
import {UserResponse} from './user.type';

export const useUserQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async ({signal}) => {
      return client.get<UserResponse>('/user.json', {
        signal,
      });
    },
  });
};
