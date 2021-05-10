import DailyMenu from "./DailyMenu";
import AddDailyMenu from "./AddDailyMenu";

const DailyMenusList = ({ dailyMenu, handleAddDailyMenu, handleDeleteDailyMenu }) => {
    return(
        <div className="daily-menus-list">
            {dailyMenu.map((dailyMenu) => (
                <DailyMenu
                    id={dailyMenu.id}
                    meal={dailyMenu.meal}
                    handleDeleteDailyMenu={handleDeleteDailyMenu} />
                ))}
            <AddDailyMenu handleAddDailyMenu={handleAddDailyMenu} />
        </div>
    );
};

export default DailyMenusList;
