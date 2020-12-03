import React from 'react';
import S from './style';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const PeopleMain = () => {
  return (
    <S.container className="container">
      <h3 className="h3Member">Members</h3>
      <form className="form-horizontal" role="form">
        {/* Add New Member */}
        <div className="form-group">
          <label htmlFor="inputAddNewMember" id="inputAddNewMemberLabel">
            Add New Member
          </label>
          <input
            type="text"
            className="form-control search-user"
            id="inputAddNewMember"
            placeholder="Username or email address"
          />
          <div className="dropdown select addNewMemberSelect">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              id="teamRoleMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="dropdown-label pull-left">Admin</span>
              <span className="caretSpan">
                <span className="caret"></span>
              </span>
            </button>
            <ul
              className="dropdown-menu role-dropdown"
              aria-labelledby="teamRoleMenu"
              role="menu"
            >
              <li>
                <a className="dropdown-item">
                  <div>Admin</div>
                  <small>
                    "Admin can manage members and billings (with billing role),
                    and read and write notes."
                  </small>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <div>Writer</div>
                  <small>"Writer can read and write all team notes."</small>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <div>Reader</div>
                  <small>"Reader can read all team notes."</small>
                </a>
              </li>
            </ul>
          </div>
          <Button variant="outlined" className="AddNewMemberButton">
            추가
          </Button>
        </div>
        <br />

        {/* Member List */}
        {/* <div className="form-group">
          <div className="member-list"> */}
        {/* 본인 */}
        {/* <div className="item clearfix">
              <span className="id" style={{ display: 'none' }}>
                7104fdbc-c0e9-4c5a-af04-62607ef52db2
              </span>
              <div className="col-sm-8 col-xs-12 ListimageAndName">
                <img
                  className="ui-avatar circle"
                  width="20"
                  height="20"
                  src="https://avatars.githubusercontent.com/u/51367622?s=96"
                  style={{ marginTop: '-4px' }}
                />
                <span className="ui-member-name">kwak-bs</span>
                <i
                  className="fa fa-envelope-o ui-resend-invitation"
                  aria-hidden="true"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Resend Invitation"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-sm-2 col-xs-6 col-role ListDropdown">
                <div className="dropdown select" style={{ minWidth: '100%' }}>
                  <button
                    className="btn btn-default dropdown-toggle no-border disabled"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    id="teamRoleMenu"
                  >
                    <span className="dropdown-label pull-left">Owner</span>
                  </button>
                </div>
              </div>
            </div>
            <hr /> */}

        {/* 동료*/}
        {/* <div className="item clearfix">
              <span className="id" style={{ display: 'none' }}>
                f21c2d60-7be8-4d97-a2f9-311e88819f13
              </span>
              <div className="col-sm-8 col-xs-12 ListimageAndName">
                <img
                  className="ui-avatar circle"
                  width="20"
                  height="20"
                  src="https://www.gravatar.com/avatar/d17318498c5efa6d2eeeab9c13ae92eb?s=96"
                  style={{ marginTop: '-4px' }}
                />
                <span className="ui-member-name">soyoung</span>
                <i
                  className="fa fa-envelope-o ui-resend-invitation"
                  aria-hidden="true"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Resend Invitation"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-sm-2 col-xs-6 col-role ListDropdown">
                <div className="dropdown select" style={{ minWidth: '100%' }}>
                  <button
                    className="btn btn-default dropdown-toggle no-border"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    id="teamRoleMenu"
                  >
                    <span className="dropdown-label pull-left">Admin</span>
                  </button>
                  <ul
                    className="dropdown-menu role-dropdown"
                    aria-labelledby="teamRoleMenu"
                    role="menu"
                  >
                    <li>
                      <a className="dropdown-item">
                        <div>Admin</div>
                        <small>
                          "Admin can manage members and billings (with billing
                          role), and read and write notes."
                        </small>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <div>Writer</div>
                        <small>
                          "Writer can read and write all team notes."
                        </small>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <div>Reader</div>
                        <small>"Reader can read all team notes."</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-xs-6 text-right col-delete">
                <span className="ui-member-delete">
                  <DeleteIcon />
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </form>
    </S.container>
  );
};

export default PeopleMain;
