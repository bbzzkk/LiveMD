import React from 'react';
import S from './style';
import { Button } from '@material-ui/core';

const TeamSettings = () => {
  return (
    <S.TeamSettingsContainer className="container">
      <h2>General</h2>
      <div className="settings">
        <div className="input-container">
          <div className="input-form">
            <label>Team Name</label>
            <input
              type="text"
              minLength={1}
              maxLength={80}
              placeholder="Your team name"
            />
          </div>
          <div className="input-form">
            <label>Team Description</label>
            <input
              type="text"
              maxLength={100}
              placeholder="Your team description"
            />
          </div>
          <div className="input-form">
            <label>Team URL Path</label>
            <div className="url-path">
              <label id="url-pre-path">https://live-md.com/board/</label>
              <input
                type="text"
                pattern="^(?!-)[a-zA-Z0-9-]+$"
                maxLength={39}
                placeholder="Your team URL path"
              />
            </div>
            <small className="pull-right">
              Allow a-Z, 0-9 and dash not at beginning.
            </small>
          </div>
        </div>
        <div className="picture-container">
          <img
            className="team-thumbnail"
            src="http://placehold.it/320x200?text=sample"
            alt="team-logo"
          />
          <Button
            className="logo-btn"
            variant="outlined"
            disableFocusRipple
            disableRipple
          >
            Upload logo
          </Button>
          <Button
            className="logo-btn"
            variant="outlined"
            disableFocusRipple
            disableRipple
          >
            Reset logo
          </Button>
        </div>
      </div>
      <Button
        id="save-btn"
        variant="contained"
        disableFocusRipple
        disableRipple
      >
        Save
      </Button>
      <div className="danger-zone">
        <h3>Danger Zone</h3>
        <div className="leave-team">
          <label>Leave team</label>
          <Button
            variant="outlined"
            color="secondary"
            disableFocusRipple
            disableRipple
            className="leaveTeamBtn"
          >
            Leave team
          </Button>
        </div>
      </div>
    </S.TeamSettingsContainer>
  );
};

export default TeamSettings;
