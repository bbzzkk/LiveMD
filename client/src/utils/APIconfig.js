const {
  DOCUMENT_HOST,
  TEAM_HOST,
  GOOGLE_HOST,
  CHAT_API_HOST,
  CHAT_WS_HOST,
  VIDEO_API_HOST,
  VIDEO_WS_HOST,
  EDITOR_API_HOST,
  EDITOR_WS_HOST,
} = process.env;

export const DOCUMENT_API = `${DOCUMENT_HOST} / api / v1`;
export const TEAM_API = `${TEAM_HOST} / api / v1`;
export const GOOGLE_AUTH_API = `${GOOGLE_HOST}/auth/google`;
export const CHAT_API = `${CHAT_API_HOST}/chat`;
export const CHAT_WS_API = `${CHAT_WS_HOST}/chat`;
export const VIDEO_API = `${VIDEO_API_HOST}/video`;
export const VIDEO_WS_API = `${VIDEO_WS_HOST}/video`;
export const EDITOR_API = `${EDITOR_API_HOST}/editor`;
export const EDITOR_WS_API = `${EDITOR_WS_HOST}/editor`;
