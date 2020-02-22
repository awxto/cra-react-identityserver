import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: 'react_dev',
  redirect_uri: 'http://localhost:5104/#/callback',
  response_type: 'token id_token',
  scope:
    'profile processings basket lexicon strategies webinvestmentagg processings.signalrhub webhooks openid',
  //scope:"profile lexicon webinvestmentagg openid",
  authority: 'https://id.analyst.braincities.co',
  silent_redirect_uri: 'http://localhost:5104/silent-renew',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
};

const userManagerConfigDev = {
  client_id: 'react_dev',
  redirect_uri: 'http://localhost:5104/#/callback',
  response_type: 'token id_token',
  scope:
    'profile processings basket lexicon strategies webinvestmentagg processings.signalrhub webhooks openid',
  authority: 'http://localhost:5105',
  silent_redirect_uri: 'http://localhost:5104/silent-renew',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
