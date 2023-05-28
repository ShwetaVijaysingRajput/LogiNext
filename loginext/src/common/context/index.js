import React, { createContext, useState } from "react";

export const AppContext = createContext();
function AppProvider({ children }) {
  const [selected, setSelected] = useState(null);
  const [dopen, setDOpen] = useState(false);
  const [eopen, setEOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const editHandler = (id) => {
    const copy = JSON.parse(JSON.stringify(data));
    const ind = copy.findIndex((ele) => ele.id === id);
    setSelected(copy[ind]);
    setEOpen(true);
  };

  const editSaveHandler = (Obj) => {
    const copy = JSON.parse(JSON.stringify(data));
    const ind = copy.findIndex((ele) => ele.id === selected.id);
    copy.splice(ind, 1, Obj);
    setData(copy);
    setEOpen(false);
  };
  const deleteConfirmHandler = () => {
    const copy = JSON.parse(JSON.stringify(data));
    const ind = copy.findIndex((ele) => ele.id === selected.id);
    copy.splice(ind, 1);
    setData(copy);
    setDOpen(false);
  };
  const likeHandler = (id) => {
    const copy = JSON.parse(JSON.stringify(data));
    const ind = copy.findIndex((ele) => ele.id === id);
    copy.splice(ind, 1, { ...copy[ind], liked: !copy[ind].liked });
    setData(copy);
  };

  const deleteHandler = (id) => {
    const copy = JSON.parse(JSON.stringify(data));
    const ind = copy.findIndex((ele) => ele.id === id);
    setSelected(copy[ind]);
    setDOpen(true);
  };
  return (
    <>
      <AppContext.Provider
        value={{
          selected,
          setSelected,
          dopen,
          setDOpen,
          eopen,
          setEOpen,
          data,
          setData,
          editHandler,
          deleteHandler,
          likeHandler,
          deleteConfirmHandler,
          editSaveHandler,
          isLoading,
          setLoading,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppProvider;
