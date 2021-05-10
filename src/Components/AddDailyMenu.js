import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

    const AddDailyMenu = ({ handleAddDailyMenu }) => {
        const [meal, setMeal] = useState('')

        const handleChange = (event) => {
            setMeal(event.target.value);
        };

        const handleSaveClick = () => {
            if (meal.trim().length > 0) {
                handleAddDailyMenu(meal);
                setMeal('');
            }
        };

    return (
        <div className="daily-menu new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Add new daily menu here...'
                value={meal}
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
