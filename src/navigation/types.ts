import {Plan} from '@rimac/features/plans/plans.type';
import {UserResponse} from '@rimac/features/user/user.type';

export type RootStackParamsList = {
  HomeScreen: undefined;
  PlansScreen: {
    document: string;
    phone: string;
  };
  SummaryScreen: {
    document: string;
    phone: string;
    plan: Plan;
    user: UserResponse;
  };
};
