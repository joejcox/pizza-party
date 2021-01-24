/* 
** TODO:
**
** Remove Google authentication here and add it to a <SignInWithGoogle /> component.
**
** Create a modal component named <Modal /> and have this component open the modal.
**
**/

import { useSelector, useDispatch } from "react-redux"
import { userInfo, setUser, setErrors } from "../../store/slices/user";
import { auth, provider } from "../../firebase/config/firebase.config";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const dispatch = useDispatch()
    const user = useSelector(userInfo);

    const handleSignIn = () => (dispatch) =>
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // const credential = result.credential;
        // const token = credential.accessToken;
        console.log(result);
        dispatch(
          setUser({
            name: result.user.displayName,
            email: result.user.email,
          })
        );
      })
      .catch((err) => dispatch(setErrors(err)));

    return !user && (<button className={`button ${styles.sign_in}`} onClick={() => dispatch(handleSignIn())}> Sign In </button>)
    
}

export default SignIn;