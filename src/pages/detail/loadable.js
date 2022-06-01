import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>loading</div>
  }
});

const loadable = () => <LoadableComponent />;

export default loadable;
