import { useState } from 'react';
import './App.css';
import  Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
//import SideIcons from './components/sideIcons'

function App() {
  // const [user, setUser] = useState()
  const [user, setUser] = useState({
    displayName: "wsna",
    email: "wsna@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg"
  })

  //autentication
  return (
    <div className="App">
      <Header userPhoto={user.photoURL} />
      <Sidebar />
      <FilesView />
     
    </div>
  );
}

export default App;
