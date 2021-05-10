import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Drawer, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   list: {
      width: 250,
   },
});

const Navigation = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const history = useHistory();
   const classes = useStyles();
   const redirectTo = (path: string, name: string) => (
      <ListItem
         button
         key={name}
         onClick={() => {
            history.push(path);
         }}
      >
         <ListItemText primary={name} />
      </ListItem>
   );

   const list = () => (
      <div
         className={clsx(classes.list)}
         role="presentation"
         onClick={() => setIsOpen(false)}
         onKeyDown={() => setIsOpen(false)}
      >
         <List>
            {redirectTo('/', 'Main Page')}
            {redirectTo('/movies', 'Movies')}
            {redirectTo('/books', 'Books')}
            {redirectTo('/restaurants', 'Restaurants')}
         </List>
      </div>
   );

   return (
      <div>
         (
         <React.Fragment>
            <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
            <Drawer
               open={isOpen}
               onClose={() => {
                  setIsOpen(false);
               }}
            >
               {list()}
            </Drawer>
         </React.Fragment>
         )
      </div>
   );
};

export default Navigation;
