/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useState, createContext, useEffect, useMemo } from 'react';
// import { webSocketConnection } from 'services/sockets';
import { clearCookie, getCookie, setCookie } from 'helpers/common';
import Toast from 'components/molecules/Toast';
import authService from 'services/authService';
import { useCancellablePromise } from 'helpers/promiseHandler';

const context = {};

export const AuthContext = createContext(context);

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie(process.env.REACT_APP_BMP_TOKEN_COOKIE));
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [fetch_user, setFetchUser] = useState(false);
  const { cancellablePromise } = useCancellablePromise();
  const [reFetch, setRefetch] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [allowedPages, setAllowedPages] = useState(
    JSON.parse(getCookie(process.env.REACT_APP_BMP_ALLOWED_PAGES_COOKIE)) || [],
  );

  const onLogout = async () => {
    clearCookie(process.env.REACT_APP_BMP_TOKEN_COOKIE);
    clearCookie(process.env.REACT_APP_BMP_ALLOWED_PAGES_COOKIE);
    setLoadingUser(false);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    function listenCookieChange(callback, interval) {
      let old_bmp_token = getCookie(process.env.REACT_APP_BMP_TOKEN_COOKIE);
      setInterval(() => {
        const new_bmp_token = getCookie(process.env.REACT_APP_BMP_TOKEN_COOKIE);
        if (new_bmp_token !== old_bmp_token) {
          try {
            callback(new_bmp_token, process.env.REACT_APP_BMP_TOKEN_COOKIE);
          } finally {
            old_bmp_token = new_bmp_token;
          }
        }
      }, interval);
    }
    listenCookieChange((value, cookie) => {
      if (cookie === process.env.REACT_APP_BMP_TOKEN_COOKIE) {
        if (!value) {
          onLogout();
        }

        // check time out and then logout
      }
    }, 1000);
  }, []);

  const getPermissions = () => {
    setLoadingUser(true);

    cancellablePromise(authService.getCurrentUser())
      .then(res => {
        setAllowedPages([
          'dashboard',
          'products',
          'campaigns',
          'brand-users',
          'product-groups',
          'completed-campaigns',
          'planned-campaigns',
          'ongoing-campaigns',
        ]);
        setCookie(
          process.env.REACT_APP_BMP_ALLOWED_PAGES_COOKIE,
          JSON.stringify([
            'dashboard',
            'products',
            'campaigns',
            'brand-users',
            'product-groups',
            'completed-campaigns',
            'planned-campaigns',
            'ongoing-campaigns',
          ]),
        );
        // setAllowedPages([...res.permissions.filter(p => p.includes('.nav')).map(p => p.split('.')[1])]);
        // setCookie(
        //   process.env.REACT_APP_POS_ALLOWED_PAGES_COOKIE,
        //   JSON.stringify(res.permissions.filter(p => p.includes('.nav')).map(p => p.split('.')[1])),
        // );
        setLoadingUser(false);

        setUser(res);
      })
      .catch(err => {
        setAllowedPages(['no-permissions']);
        setCookie(process.env.REACT_APP_POS_ALLOWED_PAGES_COOKIE, JSON.stringify(['no-permissions']));
        Toast({
          type: 'error',
          message: err.message,
        });
      });
  };
  /**
   * @description - This function is used to fetch the user details from the server
   */
  // useEffect(() => {
  //   // getPermissions();

  //   // listen to event
  //   // window.addEventListener('FETCH_ADMIN_ROLE', () => {
  //   //   getPermissions();
  //   // });
  //   // return () => {
  //   //   window.removeEventListener('FETCH_ADMIN_ROLE', () => {
  //   //     getPermissions();
  //   //   });
  //   // };
  // }, []);

  useEffect(() => {
    if (isLoggedIn) {
      // window.dispatchEvent(new Event('FETCH_ADMIN_ROLE'));
      getPermissions();
    }
  }, [isLoggedIn]);

  const onLogin = async ({ email, password }) => {
    try {
      const res = await authService.login({
        email,
        password,
      });

      if (!res?.accessToken) {
        throw new Error(res?.message);
      }

      setCookie(process.env.REACT_APP_BMP_TOKEN_COOKIE, res.accessToken);
      setIsLoggedIn(true);
    } catch ({ message }) {
      setIsLoggedIn(false);
      Toast({ type: 'error', message });
    }
  };

  const hasPermission = perm => user?.permissions?.includes(perm);
  const allContext = useMemo(
    () => ({
      setIsLoggedIn,
      onLogout,
      onLogin,
      refetch: () => setRefetch(_ => !_),
      fetchUser: () => setFetchUser(() => !fetch_user),
      setShowTokenModal,
      setLoading,
      hasPermission,
      allowedPages,
      showTokenModal,
      loading,
      isLoggedIn,
      fetch: reFetch,
      user,
      loading_user,
    }),
    [isLoggedIn, onLogin, user, hasPermission, reFetch],
  );
  return <AuthContext.Provider value={allContext}>{props.children}</AuthContext.Provider>;
}
