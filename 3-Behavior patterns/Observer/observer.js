/**
 * 2 actores
 * el que public
 * y el suscriptor
*/

const user = new User();

const init = () => {
    user.on( 'login' , userLoggedIn );
    user.on( 'logout' , userLogOut );
}

const userLoggedIn = () => {
    // usuario inició sesión
}

app.init();

const login = () => {
    // get username y password
    // check in database
    // if login success trigger login event
    user.trigger('login');

}

login();