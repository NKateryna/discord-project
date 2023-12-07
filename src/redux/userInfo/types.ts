import actions from "./actions";

export interface UserInfoState {
    username: string
    hash: string
    status: string
    microphone: boolean
    headphones: boolean
    avatar: string
    createdAt: string 
  };

export type UserInfoActionTypes = {
  CREATING_USER_INFO: 'CREATING_USER_INFO',
};

interface CreationUserInfo {
    type: typeof actions.CREATING_USER_INFO;
    payload: {
        userInfo:UserInfo
    }
}

export type Action = CreationUserInfo

export interface UserInfo extends UserInfoState {}