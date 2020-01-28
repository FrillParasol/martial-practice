import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

//훅스 사용할 거임. 리액트 뒤에 붙이고 유지보수에 쉽게 할라고....
function App() {
  const onchange = (e, newvalue) => {
    setvalue(newvalue);
  };
  const [value, setvalue] = useState(0);
  return (
    <>
      <h1>"hello react"</h1>
      <BottomNavigation value={value} onChange={onchange} showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
}

export default App;
