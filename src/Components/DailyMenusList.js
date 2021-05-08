import DailyMenu from "./DailyMenu";

const DailyMenusList = ({ dailyMenu }) => {
    return(
        <div className="daily-menus-list">
            {dailyMenu.map((dailyMenu)=> <DailyMenu />)}
        </div>
    )
}

export default DailyMenusList;

