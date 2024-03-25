import { toast } from "react-toastify";

 export function saveData(Data){
    const Card=JSON.parse(localStorage.getItem('applied'))||[]
    const exist=Card.find((CardData)=>CardData.id===Data.id)
    if(exist){
        toast.error('all ready selected');
    }
    else{
        Card.push(Data);
        localStorage.setItem('applied',JSON.stringify(Card))
        toast.success('Added Done ✔')
    }
 }


 export const getData=()=>{
    let Data=[]
    const SavedData=localStorage.getItem('applied')
    if(SavedData){
        Data=JSON.parse(SavedData)
    }
    return Data;
 }
