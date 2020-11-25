import React, { Component } from 'react';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default (SpecialComponent, option, adminRoute = null) => {
  /* 
     예)  option: null -> 누구나 출입이 가능한 페이지 (home)
                 true -> 로그인한 유저만 출입이 가능한 페이지
                 false -> 로그인한 유저는 출입이 불가능한 페이지
  */

  const AuthenticateCheck = props => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn && option) {
        props.history.push('/login');
      }
    }, []);

    return <SpecialComponent />;
  };

  return AuthenticateCheck;
};
// export default OriginalComponent => {
//   class MixedComponent extends Component {
//     checkAuth() {
//       if (!this.props.isAuth && !this.props.jwtToken) {
//         this.props.history.push('/');
//       }
//     }

//     componentDidMount() {
//       this.checkAuth();
//     }

//     componentDidUpdate() {
//       this.checkAuth();
//     }

//     render() {
//       return <OriginalComponent {...this.props} />;
//     }
//   }

//   function mapStateToProps(state) {
//     return {
//       isAuth: state.auth.isAuthenticated,
//       jwtToken: state.auth.token,
//     };
//   }

//   return connect(mapStateToProps)(MixedComponent);
// };
