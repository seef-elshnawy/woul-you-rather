
export const SetNickName='SETNICKNAME';
export const ClearNickName='CLEARNICKNAME';

export default function nickname(state= null, action){
switch(action.type){
  case SetNickName:
   return action.id;
   case ClearNickName:
       return state;
   default: return state;
}

}