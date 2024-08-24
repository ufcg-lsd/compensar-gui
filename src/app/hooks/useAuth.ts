import { useMutation } from 'react-query';
import api from './api';

interface AuthResponse {
  message: string;
  timestamp: string;
}

interface SignupData {
  nome: string;
  idade: number;
  nomeInstituicao: string;
  cargo: string;
  cidade: string;
}

export const useAuthenticate = () => {
  return useMutation<AuthResponse, Error>(() =>
    api.get('/auth/authenticate').then((res) => res.data)
  );
};

export const useSignup = () => {
  return useMutation<AuthResponse, Error, { token: string; data: SignupData }>(
    ({ token, data }) =>
      api
        .post('/auth/signup', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
  );
};
