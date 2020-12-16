import { v4 as uuid } from 'uuid';

const getUuid = () => {
  const tokens = uuid().split('-');
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
};

export default getUuid;
