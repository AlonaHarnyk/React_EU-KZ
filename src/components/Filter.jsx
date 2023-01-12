import { useDispatch } from "react-redux";
import { changeFilter } from "redux/users/usersSlice";

export const Filter = () => {
const dispatch = useDispatch()

    return (
        <label>
            Find user by name:
            <input type="text" onChange={(e) => dispatch(changeFilter(e.target.value))}/>
        </label>
    )
}