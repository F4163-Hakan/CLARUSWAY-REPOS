// ADD USER
import { Identity } from "@mui/base";
import { getDatabase, ref, set,push, onValue } from "firebase/database";
import firebase from "./firebase"
import {useState,useEffect} from "react"


export const AddUser=(info)=>{
    const db=getDatabase(firebase)
    const userRef=ref(db,"user/")
    const newUserRef=push(userRef)

    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
  
}

// READ INFO
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState()
    const [contactList,setContactList]= useState()
    useEffect(() => {
        const db=getDatabase(firebase)
        const userRef=ref(db,"user/")

        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const userArray=[]

            for(let id in data){
                userArray.push({id,...data[id]})
            }
            setContactList(userArray)
            setIsLoading(false)
        })
        return {isLoading,contactList}
    },[])

}