import React from 'react';
import S from './style';

// const Footer = () => (
//   <S.Footer>Copyright by bbzzkk team. All Rights Reserved.</S.Footer>
// );

// export default Footer;
import "./Footer.css"
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 className='h4'>GENERAL</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>Login</li>
              <li>Contact</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
          <h4 className='h4'>PRODUCT</h4>
            <ui className="list-unstyled">
              <li>Feature</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
          <h4 className='h4'>MEMBER</h4>
            <ui className="list-unstyled">
              <li>곽병선</li>
              <li>이연주</li>
              <li>조성원</li>
              <li>정소영</li>
              <li>하태린</li>
            </ui>
          </div>
        </div>
        <hr className="hr"/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Copyright by bbzzkk team. | All rights reserved |
            LiveMD | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;