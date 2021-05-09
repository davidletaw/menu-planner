import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const AddDailyMenu = ({ handleAddDailyMenu }) => {
    const [menuItem, setMenuItem] = useState('')

    const handleChange = (event) => {
        setMenuItem(event.target.value);
    };

    const handleSaveClick = () => {
        if (menuItem.trim().length > 0) {
            handleAddDailyMenu(menuItem);
            setMenuItem('');
        }
    };

    return (
        <div className="daily-menu new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Add new daily menu here...'
                value={menuItem}
                onChange={handleChange}
            />
            <div className='daily-menu-footer'>
                <button className='save' onClick={handleSaveClick}>Save</button>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}

export default AddDailyMenu;
