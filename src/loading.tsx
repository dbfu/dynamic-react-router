import NProgress from 'nprogress';
import { useEffect, useState } from 'react';

export const Loading = () => {

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    const timer = window.setTimeout(() => {
      NProgress.start();
      setVisible(true);
    }, 100);


    return () => {
      NProgress.done();
      window.clearTimeout(timer);
    }
  }, [])

  if (!visible) {
    return null;
  }

  return (
    <div>loading...</div>
  );
}