import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Pressable,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/elements';
import CheckBox from '@react-native-community/checkbox';
import {useToggle} from '../hooks/useToggle';
import {Footer} from '../components/organisms/Footer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {ScrollContainer} from '@rimac/components/templates/ScrollContainer';
import {APP_COLORS} from '@rimac/theme/colors';
import {type RootStackParamsList} from '../navigation/types';
import {useUserForm} from '@rimac/form/user.form';
import {Controller} from 'react-hook-form';

interface Props
  extends NativeStackScreenProps<RootStackParamsList, 'HomeScreen'> {}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [acceptPrivacyPolicy, toggleAcceptPrivacyPolicy] = useToggle(true);
  const [acceptDataPrivacy, toggleAcceptDataPrivacy] = useToggle(false);
  const headerHeight = useHeaderHeight();
  const {control, handleSubmit, formState} = useUserForm();

  const onSubmit = handleSubmit(async ({document, phone}) => {
    navigation.navigate('PlansScreen', {
      document,
      phone,
    });
  });

  return (
    <ScrollContainer>
      <StatusBar backgroundColor={APP_COLORS.BACKGROUND_COLOR} />
      <View style={styles.container}>
        <View style={styles.blur_1_container}>
          <Image
            source={require('../assets/images/blur-1.png')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.blur_2_container}>
          <Image
            source={require('../assets/images/blur-2.png')}
            resizeMode="contain"
          />
        </View>

        <View style={{paddingTop: headerHeight}}>
          <View style={styles.heading_container}>
            <View style={styles.heading_side_container}>
              <View style={styles.heading_side_badge_container}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={APP_COLORS.BADGE_GRADIENT}
                  style={styles.heading_side_badge_gradient}>
                  <Text style={styles.heading_side_badge_text}>
                    Seguro Salud Flexible
                  </Text>
                </LinearGradient>
              </View>

              <View style={styles.heading_side_title_container}>
                <Text style={styles.heading_side_title_text}>
                  Creado para ti y tu familia
                </Text>
              </View>
            </View>

            <View style={styles.heading_image_container}>
              <Image
                source={require('../assets/images/familia.jpg')}
                style={styles.heading_image_content}
              />
            </View>
          </View>

          <View style={styles.heading_separator_container}>
            <View style={styles.heading_separator_content} />
          </View>

          {/** Form */}
          <View style={styles.heading_separator_container}>
            <View>
              <Text style={styles.form_title}>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría, 100% online.
              </Text>
            </View>

            <View>
              <View style={styles.heading_separator_container}>
                <View style={styles.form_inputs_container}>
                  <View>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <FloatingLabelInput
                          label="Nro. de documento"
                          mask="99999999"
                          maxLength={8}
                          keyboardType="numeric"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                      name="document"
                    />
                    {formState.errors.document ? (
                      <Text>{formState.errors.document.message}</Text>
                    ) : null}
                  </View>

                  <View>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <FloatingLabelInput
                          label="Celular"
                          mask="999999999"
                          maxLength={9}
                          keyboardType="numeric"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                      name="phone"
                    />
                    {formState.errors.phone ? (
                      <Text>{formState.errors.phone.message}</Text>
                    ) : null}
                  </View>
                </View>
              </View>

              <View style={styles.heading_separator_container}>
                {/** Checkbox 1 */}
                <View style={styles.form_checkbox_container}>
                  <CheckBox
                    tintColors={{true: '#0A051E'}}
                    disabled={false}
                    value={acceptPrivacyPolicy}
                    onValueChange={toggleAcceptPrivacyPolicy}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={toggleAcceptPrivacyPolicy}>
                    <Text style={styles.form_checkbox_text}>
                      Acepto la Política de Privacidad
                    </Text>
                  </TouchableOpacity>
                </View>

                {/** Checkbox 2 */}
                <View style={styles.form_checkbox_container}>
                  <CheckBox
                    tintColors={{true: '#0A051E'}}
                    disabled={false}
                    value={acceptDataPrivacy}
                    onValueChange={toggleAcceptDataPrivacy}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={toggleAcceptDataPrivacy}>
                    <Text style={styles.form_checkbox_text}>
                      Acepto la Política Comunicaciones Comerciales
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.form_tos_container}>
                  <TouchableOpacity
                    style={styles.form_tos_button}
                    activeOpacity={0.8}>
                    <Text style={styles.form_tos_button_text}>
                      Aplican Términos y Condiciones.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.form_submit_container}>
              <Pressable onPress={onSubmit} style={styles.form_submit_button}>
                <Text style={styles.form_submit_button_text}>Cotiza aquí</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 77,
  },
  blur_1_container: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  blur_2_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  heading_container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading_side_container: {
    gap: 8,
  },
  heading_side_badge_container: {
    flexWrap: 'wrap',
  },
  heading_side_badge_gradient: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  heading_side_badge_text: {
    color: APP_COLORS.TEXT_COLOR,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  heading_side_title_container: {
    width: 188,
  },
  heading_side_title_text: {
    color: APP_COLORS.TEXT_COLOR,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 36,
  },
  heading_image_container: {
    width: 136,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heading_image_content: {
    flex: 1,
  },
  heading_separator_container: {
    paddingTop: 24,
  },
  heading_separator_content: {
    borderWidth: 1,
    borderColor: '#CCD1EE',
  },
  form_title: {
    color: APP_COLORS.TEXT_COLOR,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  form_inputs_container: {
    gap: 16,
  },
  form_checkbox_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  form_checkbox_text: {
    color: APP_COLORS.TEXT_COLOR_MUTED,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  form_tos_container: {
    paddingTop: 16,
    paddingBottom: 12,
  },
  form_tos_button: {
    flexWrap: 'wrap',
  },
  form_tos_button_text: {
    color: APP_COLORS.TEXT_COLOR,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.1,
    borderBottomColor: APP_COLORS.TEXT_COLOR,
    borderBottomWidth: 1,
  },
  form_submit_container: {
    paddingTop: 24,
    paddingBottom: 19,
  },
  form_submit_button: {
    backgroundColor: APP_COLORS.TEXT_COLOR,
    borderRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_submit_button_text: {
    color: APP_COLORS.WHITE,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.4,
    textAlign: 'center',
  },
});
