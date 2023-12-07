export interface Friend {
  _id: string;
  username: string;
  status: string;
  hash: number;
  avatar: string;
}

export interface Server {
  _id: string;
  name: string;
  photo: string;
}

export interface AvatarProps {
  avatar: string;
  name: string;
  status: UserStatus;
  statusBcgColor?: string;
  size?: UserAvatarSize;
}
export type UserAvatarSize = '80px' | '40px';

export type UserStatus = 'ONLINE' | 'OFFLINE' | 'AWAY' | 'BUSY';
