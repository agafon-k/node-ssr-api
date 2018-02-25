// import React from 'react';

import HelloWorldPage from 'components/HelloWorldPage';
import NewPost from 'components/NewPost';
import MainPage from 'components/MainPage';


import loadable from 'loadable-components';

export const HelloWorld = loadable(() => HelloWorldPage);
export const Main = loadable(() => MainPage);
export const New = loadable(() => NewPost);
