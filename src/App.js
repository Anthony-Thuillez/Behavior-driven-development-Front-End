import React, { useState, useEffect } from 'react';

// App components
import Main from './components/layouts/main';
import Login from './components/organisms/login';
import LoginHeader from './components/organisms/login/login-header';
import LoginBody from './components/organisms/login/login-body';
import LoginFooter from './components/organisms/login/login-footer';
import Title from './components/atoms/title';
import InputGroup from './components/molecules/input-group';
import Button from './components/atoms/button';
import Content from './components/layouts/content';

const App = () => {

  // State to deal with querying
  const [queryState, setQueryState] = useState(
    {
      fetching: false,
      readyToFetch: false,
      logged: false,
    }
  );

  // State of username form field
  const [usernameState, setUsernameState] = useState(null);

  // State of password form field
  const [passwordState, setPasswordState] = useState(null);

  // Effect to check if we can activate button
  useEffect(() => {
    if(usernameState && passwordState) setQueryState({fetching: false, readyToFetch: true})
  }, [usernameState, passwordState])

  // Simulate API call
  const fetchMock = () => {
    setQueryState({fetching: true, readyToFetch: false});
    const timeout = setTimeout(() => {
      setQueryState({fetching: false, readyToFetch: false, logged: true});
      clearTimeout(timeout);
    }, 4000);
  }

  return (
    <Main>
      {!queryState.logged && 
        <Login>
          <LoginHeader>
            <Title size='large'><span>Please, log in !</span></Title>
          </LoginHeader>
          <LoginBody>
            <InputGroup 
              label='username'
              error={!queryState.readyToFetch}
              onChange={e => setUsernameState(e.target.value)}
              disabled={queryState.fetching}
              testid='username-field'
            />
            <InputGroup 
              label='password'
              error={!queryState.readyToFetch}
              type='password'
              onChange={e => setPasswordState(e.target.value)}
              disabled={queryState.fetching}
              testid='password-field'
            />
          </LoginBody>
          <LoginFooter>
            <Button
              disabled={!queryState.readyToFetch}
              onClick={e => fetchMock()}
              data-testid='login-button'
            >
              <span>Login</span>
            </Button>
          </LoginFooter>
        </Login>
      }
      {queryState.logged && 
        <Content data-testid='dashboard'>
          "Hey you are now logged in !"
        </Content>
      }
    </Main>
  );
}

export default App;
