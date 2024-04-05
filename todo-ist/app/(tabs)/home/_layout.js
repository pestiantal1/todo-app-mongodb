import { Stack, Tabs } from "expo-router";
import {ModalPortal} from "react-native-modals";

export default function Layout(){
    return(
        <>
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index" />
        </Stack>
        <ModalPortal/>
        </>
    )
}