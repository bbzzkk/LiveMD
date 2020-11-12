import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Editor from './Editor';
import { Room } from '@/pages';

const Page = ({ doc, match }) => {
  const [activeUser, setActiveUser] = useState(0);
  const [docText, setDocText] = useState('');
  const pageName = match.params.page;
  const roomName = doc ? null : pageName;
  const defaultValue = doc
    ? `loading ${pageName}...`
    : `syncing with ${pageName}...`;
  const docs = null;

  useEffect(() => {
    if (doc) {
      loadDoc(match.params.page);
    }
  }, [match]);

  const loadDoc = async pageName => {
    const mdFileName = docs[pageName];
    if (!mdFileName) {
      setDocText(`There is no document named '${pageName}'`);
      return;
    }
    setDocText(`loading ${pageName}...`);
    const res = await window.fetch(mdFileName);
    const text = await res.text();
    setDocText(text);
  };

  const handleActiveUserDisp = userNum => {
    setActiveUser(userNum);
  };

  const style = {
    header: {
      height: 33 + 4,
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      margin: 0,
      padding: 7,
      backgroundColor: '#F1F1F1',
    },
    headerLeft: {
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      marginLeft: '5px',
      marginRight: 'auto',
    },
    img: {
      display: 'block',
      margin: '0 auto',
      padding: 0,
    },
    pageName: {
      paddingLeft: '8px',
      fontSize: '24px',
    },
    active: {
      marginRight: '25px',
      fontSize: '18px',
    },
  };

  return (
    <React.Fragment>
      <div style={style.header}>
        <div style={style.headerLeft}>
          <div style={style.pageName}>{pageName}</div>
        </div>
        {activeUser > 0 ? (
          <div style={style.active}>{`(active: ${activeUser})`}</div>
        ) : null}
      </div>
      <Editor
        key={`page/${pageName}`}
        roomName={roomName}
        defaultValue={defaultValue}
        value={docText}
        heightMargin={style.header.height + style.header.padding * 2}
        onActiveUser={handleActiveUserDisp}
      />
      <Room roomID={pageName} />
    </React.Fragment>
  );
};

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  doc: PropTypes.bool,
};
Page.defaultProps = {
  doc: false,
};

export default Page;
