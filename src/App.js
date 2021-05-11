import DailyMenusList from "./Components/DailyMenusList";
import {useEffect, useState} from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

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

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedMenus = JSON.parse(
            localStorage.getItem('react-menu-planner-app-data')
        );

        if (savedMenus) {
            setMenu(savedMenus);
        }
    },[]) // When this array is empty it will only run on the first load

    useEffect(() => {
        localStorage.setItem(
            'react-menu-planner-app-data',
            JSON.stringify(dailyMenu)
        );
    }, [dailyMenu])

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
      <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
              <Header handleToggleDarkMode={setDarkMode} />

              <Search handleSearchNote={setSearchText} />

              <DailyMenusList
                  dailyMenu={dailyMenu.filter((dailyMenu) =>
                      dailyMenu.meal.toLowerCase().includes(searchText)
                  )}
                  handleAddDailyMenu={addDailyMenu}
                  handleDeleteDailyMenu={deleteDailyMenu}
              />
          </div>
      </div>
  );
};

export default App;

