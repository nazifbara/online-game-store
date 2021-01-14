import Dinero from 'dinero.js';
import { Auth } from 'aws-amplify';

function printPrice(price) {
  const p = Dinero({ amount: price });
  if (p.hasSubUnits()) {
    return p.toFormat('$0,0.00');
  }
  return Dinero({ amount: price }).toFormat('$0,0');
}

async function currentUserIsAdmin(session) {
  const userSession = await Auth.currentSession();
  return isAdmin(userSession);
}

function isAdmin(userSession) {
  const {
    accessToken: {
      payload: { 'cognito:groups': groups },
    },
  } = userSession;

  if (!groups) return false;

  return groups.indexOf('Admin') !== -1;
}

export { printPrice, currentUserIsAdmin, isAdmin };
