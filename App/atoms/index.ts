import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

const user = atom({
  key: 'current-user',
  default: {
    token: null,
    refreshToken: null,
    id: null,
  },
});

const UserState = {
  useSetCurrentUser: () => useSetRecoilState(user),
  useGetCurrenUser: () => useRecoilValue(user),
};

export default UserState;
