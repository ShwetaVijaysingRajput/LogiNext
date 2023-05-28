import React, { useContext, useEffect } from "react";
import axios from "axios";
import UserCard from "../../common/components/UserCard";
import { Box } from "@mui/material";
import AlertDialog from "../../common/components/deleteModal";
import { AppContext } from "../../common/context";
import EditModal from "../../common/components/editModal";
import Loader from "../../common/components/loader";
function Home() {
  const { data, setData, setLoading } = useContext(AppContext);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const rawResp = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const resp = await rawResp.data;
        console.log(resp);
        setData(
          resp.map((ele) => {
            return { ...ele, liked: false };
          })
        );
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
    fetchData();
  }, [setData, setLoading]);

  return (
    <>
      {data.length > 0 && (
        <Box display={"flex"} flexWrap={"wrap"}>
          {data.map((ele, ind) => {
            return (
              <UserCard
                key={ind}
                id={ele.id}
                name={ele.name}
                email={ele.email}
                phone={ele.phone}
                website={ele.website}
                liked={ele.liked}
              />
            );
          })}
        </Box>
      )}
      <AlertDialog />
      <EditModal />
      <Loader />
    </>
  );
}
/*
 name,
  email,
  phone,
  website,
  liked,
  editHandler,
  deleteHandler,
*/
export default Home;
