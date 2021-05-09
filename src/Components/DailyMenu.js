import { MdDeleteForever } from "react-icons/md";


const DailyMenu = ({ id, day, meal, date, handleDeleteDailyMenu }) => {
    return (
        <div className='daily-menu'>

            <div className="daily-menu-header">
                <medium>{day}</medium>
            </div>

            <span>{meal}</span>

            <div className="daily-menu-footer">
                <small>{date}</small>
                <MdDeleteForever
                    onClick={() => handleDeleteDailyMenu(id)}
                    className='delete-icon'
                    size='1.3em'
                />
            </div>

        </div>
    );
};

export default DailyMenu;
