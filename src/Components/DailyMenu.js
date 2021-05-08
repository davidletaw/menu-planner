import { MdDeleteForever } from "react-icons/md";


const DailyMenu = () => {
    return (
        <div className='daily-menu'>

            <div className="daily-menu-header">
                <medium>Monday</medium>
            </div>

            <span>
                Hello this is in our menu!!!
            </span>

            <div className="daily-menu-footer">
                <small>05/07/2021</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>

        </div>
    );
};

export default DailyMenu;
