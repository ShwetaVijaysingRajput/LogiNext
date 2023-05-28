import { Box, Modal } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./loader.css";
function Loader() {
  const { isLoading } = useContext(AppContext);
  return (
    <>
      <Modal
        open={isLoading}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#2c3e50",
            position: "absolute",
            top: "0px",
            zIndex: "2000",
            paddingTop: "5em",
          }}
        >
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Loader;
