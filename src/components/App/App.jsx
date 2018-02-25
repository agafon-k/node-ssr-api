// import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Paper from 'material-ui/Paper';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';
// import { Link } from 'react-router-dom'
//
// import { withStyles, createStyleSheet } from 'material-ui/styles';
// import { Route, Switch } from 'react-router-dom';
//
// import * as Routes from './routes';
//
// const style = {
//     display: 'inline-block',
//     margin: '16px 32px 16px 0',
//     width: '50%'
// };
//
// class App1 extends React.Component {
//   render() {
//     return (
//
//       <div>
//           <Paper style={style}>
//               <Menu>
//                   <Link to="/main-page"><MenuItem primaryText="Maps" /></Link>
//                   <MenuItem primaryText="Books" />
//                   <MenuItem primaryText="Flights" />
//                   <MenuItem primaryText="Apps" />
//               </Menu>
//           </Paper>
//       </div>
//     );
//   }
// }
//
// const App = () => (
//      <MuiThemeProvider>
//          <App1 />
//      </MuiThemeProvider>
// );
//
// export default App;


import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Routes from '../../routes';

const App = () => (
    <div>
        <span>LOOKDKKDDKJ</span>
        <Switch>
            <Route exact path='/' component={Routes.HelloWorld} />
            <Route path='/main-page' component={Routes.Main} />
            <Route path='/new-post' component={Routes.New} />
        </Switch>
    </div>
);
export default App;
