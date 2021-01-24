import { useSelector, useDispatch } from "react-redux"
import { userInfo, setUser, setErrors } from "../../store/slices/user";
import { auth } from "../../firebase/config/firebase.config";

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

    return user && (<button className="button" onClick={() => dispatch(handleSignOut())}>Sign Out</button>)
    
}

export default SignOut;