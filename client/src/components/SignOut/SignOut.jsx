import { useSelector, useDispatch } from "react-redux"
import { userInfo, setUser, setErrors } from "../../store/slices/user";
import { auth } from "../../firebase/config/firebase.config";
import styles from "./SignOut.module.css";

const SignOut = () => {
    const dispatch = useDispatch()
    const user = useSelector(userInfo);

    const handleSignOut = () => (dispatch) =>
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => setErrors(err));

    return user && (<button className={styles.button} onClick={() => dispatch(handleSignOut())}>Sign Out</button>)
    
}

export default SignOut;