import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.leength > 0) {
      const promises = starred.map(ShowId => apiGet(`/shows/${ShowId}`));
      Promise.all(promises)
        .then(results => {
          setShows(results);
          setIsloading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsloading(false);
        });
    } else {
      setIsloading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading & <div>Shows are still loading</div>}{' '}
      {error && <div>Error occured : {error}</div>}
    </MainPageLayout>
  );
};

export default Starred;
