import React, {useState, useRef, useEffect, useId} from 'react';
import {View, Animated, ScrollView, FlatList} from 'react-native';
import {UserShieldIcon} from '../components/atoms/UserShieldIcon';
import {UserShieldAddIcon} from '../components/atoms/UserShieldAddIcon';
import {useLayout} from '../hooks/onLayout';
import {getAge} from '../utils/date';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {type RootStackParamsList} from '../navigation/types';
import {usePlansQuery} from '@rimac/features/plans/plans.query';
import {Plan} from '@rimac/features/plans/plans.type';
import {useUserQuery} from '@rimac/features/user/user.query';
import {PlansHeadingPorgress} from '@rimac/components/organisms/PlansHeadingPorgress';
import {PlansHeadingText} from '@rimac/components/molecules/PlansHeadingText';
import {PlanCard} from '@rimac/components/molecules/PlanCard';
import {PlansContainer} from '@rimac/components/organisms/PlansContainer';
import {PlansListContainer} from '@rimac/components/organisms/PlansListContainer';
import {PlansIndicator} from '@rimac/components/molecules/PlansIndicator';
import {PlanListItem} from '@rimac/components/molecules/PlanListItem';
import {Loading} from '@rimac/components/templates/Loading';
import {Error} from '@rimac/components/templates/Error';

export type FromWhoType = 'me' | 'someone-else' | null;

interface Props
  extends NativeStackScreenProps<RootStackParamsList, 'PlansScreen'> {}

export const PlansScreen: React.FC<Props> = ({navigation, route}) => {
  const [fromWho, setFromWho] = useState<FromWhoType>(null);
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const {onLayout: progressBarOnLayout, width: progressBarWidth} = useLayout();
  const scrollViewRef = useRef<ScrollView>(null);
  const hasSelectedOption = fromWho !== null;
  const userQuery = useUserQuery();
  const plansQuery = usePlansQuery();
  const userAge = getAge(userQuery.data?.data.birthDay);
  const filteredPlans =
    plansQuery.data?.data.list?.filter(plan => plan.age <= userAge) ?? [];
  const flatListRef = useRef<FlatList<Plan>>(null);
  const queriesAreLoading = userQuery.isLoading || plansQuery.isLoading;
  const queriesHasErrors = userQuery.isError || plansQuery.isError;

  const uniqueId = useId();
  const [currentFlatListIndex, setCurrentFlatListIndex] = useState<number>(0);

  const handleSwitchFromWho = (fromWho: FromWhoType) => {
    setFromWho(fromWho);

    if (fromWho === null) {
      changeWidth(50);

      scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
    } else {
      changeWidth(100);

      scrollViewRef.current?.scrollToEnd({animated: true});
    }
  };

  const changeWidth = (percentage: number) => {
    if (progressBarWidth > 0) {
      const targetWidth = progressBarWidth * (percentage / 100);

      Animated.timing(animatedWidth, {
        toValue: targetWidth,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };

  const onGoBackStepPress = () => {
    handleSwitchFromWho(null);
  };

  useEffect(() => {
    if (progressBarWidth > 0) {
      const targetWidth = progressBarWidth * 0.5;

      Animated.timing(animatedWidth, {
        toValue: targetWidth,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [progressBarWidth, animatedWidth]);

  if (queriesAreLoading) {
    return <Loading />;
  }

  if (queriesHasErrors) {
    return <Error />;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fafbff'}}>
      <PlansHeadingPorgress
        animatedWidth={animatedWidth}
        fromWho={fromWho}
        onGoBackStepPress={onGoBackStepPress}
        progressBarOnLayout={progressBarOnLayout}
      />

      <ScrollView ref={scrollViewRef}>
        <View style={{paddingTop: 32, paddingHorizontal: 24}}>
          <PlansHeadingText name={userQuery.data?.data.name!} />

          <PlansContainer>
            <PlanCard
              onPress={() => {
                handleSwitchFromWho('me');
              }}
              Icon={UserShieldIcon}
              fromWho={fromWho}
              title="Para mí"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              isSelected={fromWho === 'me'}
            />

            <PlanCard
              onPress={() => {
                handleSwitchFromWho('someone-else');
              }}
              Icon={UserShieldAddIcon}
              fromWho={fromWho}
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
              isSelected={fromWho === 'someone-else'}
            />
          </PlansContainer>
        </View>

        {hasSelectedOption ? (
          <PlansListContainer>
            <FlatList
              ref={flatListRef}
              keyExtractor={element => `${uniqueId}-${element.name}`}
              data={filteredPlans}
              horizontal
              viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
              }}
              onViewableItemsChanged={({viewableItems}) => {
                if (viewableItems.length > 0) {
                  setCurrentFlatListIndex(viewableItems[0]?.index ?? 0);
                }
              }}
              renderItem={({item: {description, name, price, age}}) => {
                return (
                  <PlanListItem
                    description={description}
                    age={age}
                    name={name}
                    price={price}
                    onSelectPlanPress={() => {
                      navigation.navigate('SummaryScreen', {
                        document: route.params.document,
                        phone: route.params.phone,
                        plan: {
                          description,
                          name,
                          price,
                          age,
                        },
                        user: userQuery.data?.data!,
                      });
                    }}
                  />
                );
              }}
            />

            <PlansIndicator
              onBackPress={() => {
                if (currentFlatListIndex > 0) {
                  flatListRef.current?.scrollToIndex({
                    index: currentFlatListIndex - 1,
                  });
                }
              }}
              onNextPress={() => {
                if (currentFlatListIndex < filteredPlans!.length - 1) {
                  flatListRef.current?.scrollToIndex({
                    index: currentFlatListIndex + 1,
                  });
                }
              }}
              currentFlatListIndex={currentFlatListIndex}
              filteredPlans={filteredPlans}
            />
          </PlansListContainer>
        ) : null}
      </ScrollView>
    </View>
  );
};
