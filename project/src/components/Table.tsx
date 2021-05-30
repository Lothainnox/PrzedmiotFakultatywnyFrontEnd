import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Book } from '../store/reducers/books.reducer';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Restaurant } from '../store/reducers/restaurants.reducer';
import { Movie } from '../store/reducers/movies.reducer';

const useRowStyles = makeStyles({
   root: {
      '& > *': {
         borderBottom: 'unset',
      },
   },
});

export type itemTypes = Book | Restaurant | Movie;

export interface TableInterface {
   item: itemTypes[];
   type: string;
   onDelete?: (item: itemTypes) => void;
}

const CollapsibleTable: React.FunctionComponent<TableInterface> = ({ item, type, onDelete }) => {
   return (
      <TableContainer component={Paper}>
         <Table aria-label="collapsible table">
            <TableHead>
               <TableRow>
                  <TableCell />
                  <TableCell>{type === 'restaurant' ? 'Nazwa' : 'Tytuł'}</TableCell>
                  <TableCell align="center">{type === 'restaurant' ? 'Adres' : 'Autor'}</TableCell>
                  <TableCell align="center">
                     {type === 'restaurant' ? 'Oczekiwanie na posiłek (minuty)' : 'Rok'}
                  </TableCell>
                  <TableCell align="center">Ocena</TableCell>
                  <TableCell align="center">Akcje</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {item.map((row: itemTypes) => (
                  <Row key={row.id} row={row} onDelete={onDelete} type={type} />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default CollapsibleTable;

function Row(props: { row: itemTypes; onDelete: any; type: string }) {
   const { row } = props;
   const [open, setOpen] = React.useState(false);
   const classes = useRowStyles();
   const history = useHistory();

   const deleteItem = () => {
      if (props.onDelete) {
         props.onDelete(row);
      }
   };

   return (
      <React.Fragment>
         <TableRow className={classes.root}>
            <TableCell>
               <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
               {'name' in row && row.name.length !== 0
                  ? row.name
                  : 'title' in row && row.title.length !== 0
                  ? row.title
                  : null}
            </TableCell>
            <TableCell align="center">
               {'address' in row && row.address.length !== 0
                  ? row.address
                  : 'author' in row && row.author.length !== 0
                  ? row.author
                  : null}
            </TableCell>
            <TableCell align="center">
               {'waittime' in row && row.waittime !== 0
                  ? row.waittime
                  : 'year' in row && row.year !== 0
                  ? row.year
                  : null}
            </TableCell>
            <TableCell align="center">{row.rate}</TableCell>
            <TableCell align="center">
               <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => history.push(`/${props.type}/${row.id}`)}
               >
                  edit
               </Button>
               <Button variant="outlined" color="secondary" onClick={deleteItem}>
                  delete
               </Button>
            </TableCell>
         </TableRow>
         <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                     <Typography variant="h6" gutterBottom component="div">
                        Opis
                     </Typography>
                     <Table size="small" aria-label="purchases">
                        <TableHead>
                           <TableRow></TableRow>
                        </TableHead>
                        <TableBody>
                           <TableRow>{row.description}</TableRow>
                        </TableBody>
                     </Table>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </React.Fragment>
   );
}
