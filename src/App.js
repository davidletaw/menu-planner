import DailyMenusList from "./Components/DailyMenusList";
import { useState } from "react";
import { nanoid } from "nanoid";


const App = () => {
    const [dailyMenu, setMenu] = useState([
        {
            id: nanoid(),
            text: "This is my first dish",
            date: "05/1/21",
        },
        {
            id: nanoid(),
            text: "This is my second dish",
            date: "05/1/21",
        },
        {
            id: nanoid(),
            text: "This is my third dish",
            date: "05/1/21",
        }
    ]);

  return (
      <div className="container">
        <DailyMenusList dailyMenu={dailyMenu}/>
      </div>
  );
};

export default App;

