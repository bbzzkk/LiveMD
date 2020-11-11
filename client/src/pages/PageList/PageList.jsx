import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import Modal from 'react-modal';

const url = `http://${window.location.hostname}:${process.env.PORT || '1234'}`;
const timeAgoMinPeriod = 10;
const pagesListMax = 10;

// TODO: Make appropriate cross-origin correspondence
// Avoid unnecessary caching in IE browser
let headers = {};
const userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
  headers = { pragma: 'no-cache' };
}

const PageList = props => {
  const [pages, setPages] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [getPagesError, setGetPagesError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deletePageName, setDeletePageName] = useState('');
  const [deleteErrorMsg, setDeleteErrorMsg] = useState('');
  const refInputNewPageName = useRef(null);
  const refContainer = useRef(null);

  useEffect(() => {
    Modal.setAppElement(refContainer.current);
    getListPages();
  }, []);

  const getListPages = async () => {
    try {
      const response = await window.fetch(`${url}/pages`, {
        headers,
      });
      const data = await response.json();
        setPages(
          data.sort((x, y) => {
            if (x.modified === y.modified) return 0;
            if (!x.modified) return 1;
            if (!y.modified) return -1;
            if (x.modified > y.modified) return -1;
            if (x.modified < y.modified) return 1;
            return 0;
          }),
        );
        setGetPagesError('');
    } catch (e) {
      setPages([]);
      setGetPagesError(`Get Pages Error [ ${e}]`);
    }
  };

  const handleNew = () => {
    const pageName = refInputNewPageName.current.value;
    if (pages.find(x => x.page === pageName)) {
      alert('페이지가 존재합니다.');
    } else if (pageName) {
      props.history.push(`/page/${pageName}`);
    }
  };

  const handleDeleteOpenModal = e => {
    setModalIsOpen(true);
    setDeletePageName(e.target.id);
  };

  const handleDeleteCloseModal = () => {
    setModalIsOpen(false);
    setDeleteErrorMsg('');
  };
  const handleDeleteOkBtnModal = async () => {
    try {
      const res = await window.fetch(`${url}/deletePage`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: deletePageName,
      });
      const data = await res.json();
      if (data.status === 'SUCCESS') {
        getListPages();
        setModalIsOpen(false);
        setDeleteErrorMsg('');
      } else {
        setDeleteErrorMsg(`Error: ${data.msg}`);
      }
    } catch (e) {
      setDeleteErrorMsg(`Error: ${e}`);
    }
  };

  const handlePrevious = () => {
    setCurrentPageNum(currentPageNum - 1);
  };

  const handleNext = () => {
    setCurrentPageNum(currentPageNum + 1);
  };

  const renderListPages = () => {
    const metadataStyle = {
      margin: '0 0 0 0.5em',
      color: 'grey',
    };
    const totalPageCount = Math.ceil(pages.length / pagesListMax);
    const currentPages = pages.slice(
      (currentPageNum - 1) * pagesListMax,
      currentPageNum * pagesListMax,
    );
    return (
      <React.Fragment>
        {getPagesError}
        <p>
          Create a new page:{' '}
          <input
            ref={refInputNewPageName}
            type="text"
            placeholder="new page name"
          />
          <input type="button" value="Create" onClick={handleNew} />
        </p>
        <ul>
          {currentPages.map(p => (
            <li key={p.page}>
              <Link to={`/page/${decodeURIComponent(p.page)}`}>
                {decodeURIComponent(p.page)}
              </Link>
              <span style={metadataStyle}>
                (created:{' '}
                <TimeAgo date={p.created} minPeriod={timeAgoMinPeriod} />,
                modified:{' '}
                <TimeAgo date={p.modified} minPeriod={timeAgoMinPeriod} />,
                active: {p.active})
              </span>
              <button
                className="deleteBtn"
                onClick={handleDeleteOpenModal}
                id={p.page}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {currentPageNum > 1 ? (
          <button type="button" onClick={handlePrevious}>
            Prev
          </button>
        ) : null}
        {pages.length > pagesListMax ? (
          <span>{`Page: ${currentPageNum}`}</span>
        ) : null}
        {currentPageNum < totalPageCount ? (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        ) : null}
      </React.Fragment>
    );
  };

  const modalStyles = {
    wrapper: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      },
    },
    pageName: {
      marginTop: '10px',
    },
    error: {
      color: '#e74c3c',
    },
  };

  return (
    <div style={{ margin: '8px' }} ref={refContainer}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleDeleteCloseModal}
        style={modalStyles.wrapper}
        contentLabel="Delete page"
      >
        <div>Do you really want to delete?</div>
        <div style={modalStyles.pageName}>
          &quot;
          {deletePageName}
          &quot;
        </div>
        {deleteErrorMsg !== '' ? (
          <div style={modalStyles.error}>{deleteErrorMsg}</div>
        ) : null}
        <button
          className="deleteCancelBtnModal"
          onClick={handleDeleteCloseModal}
          type="button"
        >
          Cancel
        </button>
        <button
          className="deleteOkBtnModal"
          onClick={handleDeleteOkBtnModal}
          type="button"
        >
          OK
        </button>
      </Modal> 
      <h2>List of pages</h2>
      {renderListPages()}
    </div>
  );
};

export default PageList;
