import {useQuery} from '@tanstack/react-query';
import {client} from '../../services/axios';
import {PlansResponse} from './plans.type';

export const usePlansQuery = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: async ({signal}) => {
      return client.get<PlansResponse>('/plans.json', {
        signal,
      });
    },
  });
};
