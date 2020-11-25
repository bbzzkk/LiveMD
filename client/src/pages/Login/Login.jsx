import React from 'react';
import { observer, inject } from 'mobx-react';

import { GoogleLogin } from '@/components/login';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import S from './style';

toast.configure();
const Login = props => {
  return (
    <S.OutsideContainer>
      <S.InsideContainer>
        <S.Heading>
          협업의 즐거움, <b>LiveMD</b> 😎
        </S.Heading>
        <GoogleLogin />
      </S.InsideContainer>
    </S.OutsideContainer>
  );
};

export default Login;
