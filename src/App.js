import DailyMenusList from "./Components/DailyMenusList";
import { useState } from "react";
import { nanoid } from "nanoid";


const App = () => {
    const [dailyMenu, setMenu] = useState([
        {
            id: nanoid(),
            day: "Monday",
            meal: "Cereal",
            date: "05/1/21",
        },
        {
            id: nanoid(),
            day: "Tuesday",
            meal: "Beef Stew",
            date: "05/1/21",
        },
        {
            id: nanoid(),
            day: "Wednesday",
            meal: "This is my third dish",
            date: "05/1/21",
        }
    ]);

    const addDailyMenu = (text) => {
        const date = new Date();
        const newDailyMenu = {
            id: nanoid(),
            day: text,
            text: text,
            date: date.toLocaleDateString()
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
        <DailyMenusList
            dailyMenu={dailyMenu}
            handleAddDailyMenu={addDailyMenu}
            handleDeleteDailyMenu={deleteDailyMenu}
        />

      </div>
  );
};

export default App;

