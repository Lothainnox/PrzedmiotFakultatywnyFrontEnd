import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   menuIcon: {
      cursor: 'pointer',
      display: 'flex',
   },
});

const Navigation = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const history = useHistory();
   const classes = useStyles();
   const redirectTo = (path: string, name: string) => (
      <div
         onClick={() => {
            history.push(path);
         }}
      >
         {name}
      </div>
   );

   return (
      <div>
         <div className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
         </div>
         <Drawer
            open={isOpen}
            onClose={() => {
               setIsOpen(false);
            }}
         >
            <div>
               <ul>
                  <li>{redirectTo('/', 'Main Page')}</li>
                  <li>{redirectTo('/movies', 'Movies')}</li>
                  <li>{redirectTo('/books', 'Books')}</li>
                  <li>{redirectTo('/restaurants', 'Restaurants')}</li>
               </ul>
            </div>
         </Drawer>
      </div>
   );
};

export default Navigation;
