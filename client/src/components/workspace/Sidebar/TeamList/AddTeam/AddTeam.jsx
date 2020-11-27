import React, { useState, useRef } from 'react';

import S from './style';

const AddTeamButton = props => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const nameRef = useRef('');
  const descriptionRef = useRef('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = e => {
    setName(e.target.value);
  };
  const handleAddTeam = () => {
    console.log(nameRef.current.value);
    console.log(descriptionRef.current.value);
  };
  return (
    <>
      <S.AddIcon onClick={handleOpen}>
        <span>+</span>
      </S.AddIcon>
      <S.Dialog open={open} onClose={handleClose}>
        <S.Header>
          <S.Title>Create Team</S.Title>
          <S.Actions>
            <S.CloseButton onClick={handleClose}>X</S.CloseButton>
          </S.Actions>
        </S.Header>
        <S.Contents>
          <S.Input
            autoFocus
            label="Team Name"
            inputRef={nameRef}
            onChange={handleChange}
            helperText="Must exceed 3 letters"
            error={name.length < 3 ? true : false}
          />
          <S.Input label="Team Description" inputRef={descriptionRef} />
        </S.Contents>

        <S.Actions>
          <S.CreateButton variant="contained" onClick={handleAddTeam}>
            Create Team
          </S.CreateButton>
        </S.Actions>
      </S.Dialog>
    </>
  );
};

export default AddTeamButton;
