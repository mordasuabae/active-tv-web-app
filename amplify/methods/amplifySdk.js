import { Auth } from 'aws-amplify';

//register user
export async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
//signout
export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
//signin
export async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}
//resend confimation code
export async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}
//global signout
export async function signOutGlobal(){
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

