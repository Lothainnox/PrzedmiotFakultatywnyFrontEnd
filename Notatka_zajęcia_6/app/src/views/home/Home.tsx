import { Search } from "@material-ui/icons";
import React from "react";
import NavPanel from "../../components/NavPanel";
import { Key } from "../../key";
import http from "../../utils/http";

const Home = () => {
   // const makeRequest = async () => {
   //    try {
   //       const response = await fetch(
   //          `http://www.omdbapi.com/?apikey=${Key}&s=harry+potter&plot=full`
   //       ).then((resp) => resp.json());
   //       console.log(response);
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };
   // makeRequest();

   const [movie, setMovie] = React.useState({});

   React.useEffect(() => {
      const makeRequest = async () => {
         try {
            const response = (await http.get("http://www.omdbapi.com/", {
               apikey: Key,
               s: Search,
               plot: "full",
            })) as any;
            setMovie(response);
         } catch (error) {
            console.log(error);
         }
      };
      makeRequest();
   });

   return (
      <div>
         <NavPanel />
         <div>This is home page!</div>
      </div>
   );
};

export default Home;
