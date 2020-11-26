import React from 'react';


const PeopleMain = () => {

  return (
    <>
      <div className="manage section col-sm-9">
        <h3>Members</h3>
        <form class="form-horizontal team-member" >
          <div className="form-group add-member">
            <label for="inputAddNewMember" className="col-xs-12 control-label pl-0">Add New Member</label>
            <div className="col-sm-8 col-xs-12 pl-0">
              <div className="select2-container select2-container-multi form-control search-user" id="s2id_inputAddNewMember">
                <ul className="select2-choices">
                  <li classNmae="select2-search-field">
                    <label for="s2id_autogen1" className="sr-only select2-offscreen">Add New Member</label>
                    <input type="text" autoComplete="member" autoCorrect="off" autoCapitalize="off" 
                    spellCheck="false" className="form-control select2-input select2-default" id="s2id_autogen1"
                    placeholder aria-activedescendant="select2-result-label-48"/>
                  </li>
                </ul>
              </div>
              <input type="text" className="form-control search-user" id="inputAddNewMember"
              placeholder="Username or email address" tabIndex="-1" /> 
            </div>
            <div className="col-sm-2 col-xs-6 col-role">
              <div className="dropdown select">
                <button className="btn btn-default dropdown-toggle" type="button" id="teamRoleMenu"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  <span className="dropdown-label pull-left">Admin</span>
                  <span className="bs-caret">
                    <span className="caret"></span>
                  </span>
                </button>
                <ul className="dropdown-menu role-dropdown" aria-labelledby="teamRoleMenu" >
                  <li>
                    <a>
                      <div>Admin</div>
                      <small>"Admin can manage members and billings (with billing role), and read and write notes."</small>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Writer</div>
                      <small>"Writer can read and write all team notes."</small>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Reader</div>
                      <small>"Reader can read all team notes."</small>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-xs-6 col-add pl-0-sm">
              <a className="btn btn-block btn-default ui-member-add">
                Add
              </a>
            </div>
          </div>
          <br/>
          <div className="form-group">
            <div className="member-list">

            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default PeopleMain;