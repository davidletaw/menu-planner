import DailyMenusList from "./Components/DailyMenusList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";

const App = () => {
    const [dailyMenu, setMenu] = useState([
        {
            id: nanoid(),
            meal: "first meal",
        },
        {
            id: nanoid(),
            meal: "second meal",
        },
        {
            id: nanoid(),
            meal: "third meal",
        }
    ]);

    const [searchText, setSearchText] = useState('');


    const addDailyMenu = (text) => {
        const newDailyMenu = {
            id: nanoid(),
            meal: text,
        };
        const newMenu = [...dailyMenu, newDailyMenu];
        setMenu(newMenu);
    };

    const deleteDailyMenu = (id) => {
       const newMenu = dailyMenu.filter((dailyMenu)=> dailyMenu.id !== id);
       setMenu(newMenu);
    };

  return (
      <div className="container">
          <Search handleSearchNote={setSearchText} />

          <DailyMenusList
            dailyMenu={dailyMenu.filter((dailyMenu) =>
                dailyMenu.meal.toLowerCase().includes(searchText)
            )}
            handleAddDailyMenu={addDailyMenu}
            handleDeleteDailyMenu={deleteDailyMenu}
            />
      </div>
  );
};

export default App;

