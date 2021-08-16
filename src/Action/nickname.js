import { SetNickName } from "../Reducer/nickname";
import { ClearNickName } from "../Reducer/nickname";

export function setnickname(id){
return{
    type:SetNickName,
    id,
};
}

export function clearnickname(){
    return{
        type:ClearNickName,
    };
    }