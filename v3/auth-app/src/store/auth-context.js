/**
 * 
 */
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () =>{}
});


 const AuthContextProvider = () => {}