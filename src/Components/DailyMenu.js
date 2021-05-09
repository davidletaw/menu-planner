import { MdDeleteForever } from "react-icons/md";


const DailyMenu = ({ id, day, meal, date }) => {
    return (
        <div className='daily-menu'>

            <div className="daily-menu-header">
                <medium>{day}</medium>
            </div>

            <span>
                {meal}
            </span>

            <div className="daily-menu-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>

        </div>
    );
};

export default DailyMenu;
