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
      Promise.all(promises).then(results => {
        console.log('results', results);
      });
    } else {
      setIsloading(false);
    }
  }, [starred]);

  return <MainPageLayout>this is Starred</MainPageLayout>;
};

export default Starred;
