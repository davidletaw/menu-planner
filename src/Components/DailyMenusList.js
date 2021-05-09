import DailyMenu from "./DailyMenu";
import AddDailyMenu from "./AddDailyMenu";

const DailyMenusList = ({ dailyMenu, handleAddDailyMenu }) => {
    return(
        <div className="daily-menus-list">
            {dailyMenu.map((dailyMenu) => (
                <DailyMenu
                    id={dailyMenu.id}
                    day={dailyMenu.day}
                    meal={dailyMenu.meal}
                    date={dailyMenu.date}
                />
            ))}
            <AddDailyMenu handleAddDailyMenu={handleAddDailyMenu}/>
        </div>
    );
};

export default DailyMenusList;

