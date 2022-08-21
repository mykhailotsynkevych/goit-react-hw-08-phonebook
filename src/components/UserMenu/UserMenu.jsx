import { useDispatch, useSelector } from 'react-redux';
import { authSelectors} from '../../redux/auth';
import operations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);


  return (
    <div className={s.wrap}>
      <span className={s.link}>Hi, {name}</span>
      <button className={s.button} type="button" onClick={() => dispatch(operations.logOut())}>
        Log Out
      </button>
    </div>
  );
}