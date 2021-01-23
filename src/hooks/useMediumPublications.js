import { useState, useEffect } from 'react';

function useMediumPublications() {
  const [state, setState] = useState({
    publications: [],
    status: { value: 'loading', payload: null },
  });

  const fetchNotifications = async () => {
    setState({ ...state, status: { value: 'loading' } });

    const token = process.env.REACT_APP_MEDIUM_TOKEN;
    const url = process.env.REACT_APP_MEDIUM_API_URL;

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const params = {
      headers,
    };

    try {
      const userResponse = await fetch(`${url}/me`, params);
      const user = (await userResponse.json()).data;

      const { data: publications } = await fetch(
        `${url}/users/${user.id}/publications`,
        params
      ).then((r) => r.json());

      setState({ publications, status: { value: 'success' } });
    } catch (e) {
      setState({ ...state, status: { value: 'error', payload: e } });
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return { publications: state.publications, update: fetchNotifications };
}
export default useMediumPublications;
