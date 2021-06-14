import { useEffect, useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { Link, useHistory } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import Cart from '../../cart';
import './header.css';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const history = useHistory();
  useEffect(() => {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));

    return () => {
      Hub.remove('auth');
    };
  }, []);

  function signOut() {
    Auth.signOut();
    history.push('/');
  }
  return (
    <header>
      <div className="Container">
        <div className="HeaderBar">
          <span className="AppName">
            <Link to="/">OnlineGameStore</Link>
          </span>
          <span>
            <Cart />
            {isAuthenticated ? (
              <GrLogout
                onClick={signOut}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              />
            ) : null}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
