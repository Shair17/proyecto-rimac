import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import z from 'zod';

export const userSchema = z.object({
  document: z
    .string({
      required_error: 'Documento requerido.',
      invalid_type_error: 'Ingresa un documento válido.',
    })
    .min(8, {message: 'Documento debe tener como mínimo 9 dígitos.'})
    .max(8, {message: 'Documento debe tener como máximo 9 dígitos.'}),
  phone: z
    .string({
      required_error: 'Celular requerido.',
      invalid_type_error: 'Ingresa un Celular válido.',
    })
    .min(9, {message: 'Celular debe tener como mínimo 9 dígitos.'})
    .max(9, {message: 'Celular debe tener como máximo 9 dígitos.'})
    .startsWith('9', {message: 'Celular debe empezar con 9.'}),
});

export type UserFormDataValues = z.infer<typeof userSchema>;

export const useUserForm = () =>
  useForm<UserFormDataValues>({
    resolver: zodResolver(userSchema),
  });
