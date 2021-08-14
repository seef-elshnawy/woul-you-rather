import { SetNickName } from "../Reducers/nickname";
import { ClearNickName } from "../Reducers/nickname";

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