import { MdDeleteForever } from "react-icons/md";


const DailyMenu = ({ id, meal, handleDeleteDailyMenu }) => {
    return (
        <div className='daily-menu'>
            <span>{meal}</span>
            <div className="daily-menu-footer">
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
