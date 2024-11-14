import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route, Navigate} from "react-router-native";
import LoginInPage from "../pages/Login";

const Main = () =>{
    return (
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/'
                    element={
                        <RepositoryList/>
                    }
                />
                <Route path='/signin'
                    element={
                        <LoginInPage />
                    }
                />
             <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </View>
    )
}
export default Main;