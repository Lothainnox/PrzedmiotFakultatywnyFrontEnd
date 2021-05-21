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

const useRowStyles = makeStyles({
   root: {
      '& > *': {
         borderBottom: 'unset',
      },
   },
});

interface TableInterface {
   type?: string;
}

const CollapsibleTable: React.FunctionComponent<TableInterface> = ({ type }) => {
   let rows = type === "restaurant" ? restaurants : type === "movies" ? movies : books
   return (
      <TableContainer component={Paper}>
         <Table aria-label="collapsible table">
            <TableHead>
               <TableRow>
                  <TableCell />
                  <TableCell>{type === "restaurant" ? "Nazwa" : "Tytuł"}</TableCell>
                  <TableCell align="center">{type === "restaurant" ? "Adres" : "Autor"}</TableCell>
                  <TableCell align="center">{type === "restaurant" ? "Oczekiwanie na posiłek (minuty)" : "Rok"}</TableCell>
                  <TableCell align="center">Ocena</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <Row key={row.param1} row={row} />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

export default CollapsibleTable;

function Row(props: { row: ReturnType<typeof createData> }) {
   const { row } = props;
   const [open, setOpen] = React.useState(false);
   const classes = useRowStyles();

   return (
      <React.Fragment>
         <TableRow className={classes.root}>
            <TableCell>
               <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">{row.param1}</TableCell>
            <TableCell align="center">{row.param2}</TableCell>
            <TableCell align="center">{row.param3}</TableCell>
            <TableCell align="center">{row.param4}</TableCell>
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
                           <TableRow>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {row.dropdown.map((dropdownRow) => (
                              <TableRow>
                                 {dropdownRow.description}
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </React.Fragment>
   );
}

function createData(
   param1: string,
   param2: string,
   param3: number,
   param4: number,
   description: string,
) {
   return {
      param1,
      param2,
      param3,
      param4,
      dropdown: [
         {description}
      ],
   };
}

const movies = [
   createData('Open water', "Chris Kentis", 2003, 7, "Opis 1"),
   createData('Donnie Darko', "Richard Kelly", 2001, 6, "Opis 2"),
   createData('Edward Scissorhands', "Tim Burton", 1990, 4, "Opis 3"),
   createData('Saw', "James Wan", 2004, 6, "Opis 4"),
   createData("Lucky Number Slevin", "Paul McGuigan", 2006, 5, "Opis 5"),
];

const books = [
   createData('Champion', "Marie Lu", 2014, 9, "Opis 1"),
   createData('Bird Box', "Josh Malerman", 2014, 8, "Opis 2"),
   createData('Beastly', "Alex Flinn", 2010, 9, "Opis 3"),
   createData('I\'ll Give You the Sun', "Jandy Nelson", 2015, 10, "Opis 4"),
   createData('Enduring Love', "Ian McEwan", 1998, 7, "Opis 5"),
];

const restaurants = [
   createData('Happy London', "25-29 Coventry St, London", 20, 9, "Opis 1"),
   createData('BRGR LDN', "244 York Way, London", 30, 10, "Opis 2"),
   createData('La Ferme London', "154 Regent's Park Rd, London", 15, 8, "Opis 3"),
   createData('Hazara Restaurants', "44 Belsize Ln, Belsize Park, London", 20, 10, "Opis 4"),
   createData('Barrafina', "Stable St, London", 25, 8, "Opis 5"),
];
