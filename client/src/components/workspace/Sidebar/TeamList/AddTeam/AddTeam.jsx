import React, { useState, useRef } from 'react';
import { inject, observer } from 'mobx-react';

import S from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const handleAddTeam = async () => {
    const { authStore, teamStore } = props.store;
    const { id, email } = authStore.user;
    const teamname = nameRef.current.value;
    const description = descriptionRef.current.value;
    if (teamname.length < 4 && teamname.length > 12) {
      toast.error(`팀 이름을 확인해주세요 😕`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const data = {
      userId: id,
      teamname: teamname,
      description: description,
      email: email,
    };
    await teamStore.createTeam(data).then(res => setOpen(false));
  };
  return (
    <>
      <S.AddIcon onClick={handleOpen}>
        <S.PlusText>+</S.PlusText>
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
            helperText="Exceed 3 letters and less than 4 letters"
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

export default inject('store')(observer(AddTeamButton));
