// server domain
// const API_HOST = 'https://live-md.com';
// const API_HOST_WS = 'wss://live-md.com';

// export const DOCUMENT_API = `${API_HOST}:8010`;
// export const TEAM_API = `${API_HOST}:8008`;
// export const AUTH_API = `${API_HOST}:8007`;
// export const EDITOR_API = `${API_HOST_WS}:8006`;
// export const VIDEO_API = `${API_HOST}:8002`;
// export const CHAT_API = `${API_HOST}:8001`;

// // document api
// export const GET_ALL_DOCUMENTS_API = `${DOCUMENT_API}/owners/`;
// export const CREATE_DOCUMENTS_API = `${DOCUMENT_API}/owners/`;

// // auth api
// export const GET_USER_API = `${AUTH_API}/users/`;
// export const SIGNIN_API = `${AUTH_API}/signin`;
// export const SIGNOUT_API = `${AUTH_API}/signout`;

// // team api
// export const GET_TEAMLIST_API = `${TEAM_API}/teams/`;
// export const CREATE_TEAM_API = `${TEAM_API}/teams`;

// localhost
const API_HOST = 'http://localhost';
const API_HOST_WS = 'ws://localhost';

export const DOCUMENT_API = `${API_HOST}:8080`;
export const TEAM_API = `${API_HOST}:5252`;
export const AUTH_API = `${API_HOST}:5000`;
export const EDITOR_API = `${API_HOST_WS}:8005`;
export const VIDEO_API = `${API_HOST}:8002`;
export const CHAT_API = `${API_HOST}:8001`;

// document api
export const GET_ALL_DOCUMENTS_API = `${DOCUMENT_API}/api/v1/documents?oid=`;
export const CREATE_DOCUMENTS_API = `${DOCUMENT_API}/api/v1/documents?oid=`;

// auth api
export const GET_USER_API = `${AUTH_API}/api/v1/users/`;
export const SIGNIN_API = `${AUTH_API}/api/v1/auth/signin`;
export const SIGNOUT_API = `${AUTH_API}/api/v1/auth/signout`;

// team api
export const GET_TEAMLIST_API = `${TEAM_API}/api/v1/teams?userId=`;
export const CREATE_TEAM_API = `${TEAM_API}/api/v1/teams`;
