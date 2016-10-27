import {ReceiveQuestLoadAction, ReceiveQuestSaveAction} from '../actions/ActionTypes'
import {QuestType} from './StateTypes'

const initial_state: QuestType = {};

export function quest(state: QuestType = initial_state, action: Redux.Action): QuestType {
  switch(action.type) {
    case 'RECEIVE_QUEST_LOAD':
      return (action as ReceiveQuestLoadAction).quest;
    case 'REALTIME_CHANGE':
      return Object.assign({}, state, {md: (action as any).text});
    case 'RECEIVE_QUEST_SAVE':
      console.log(action);
      return Object.assign({}, state, (action as ReceiveQuestSaveAction).quest);
    case 'NEW_QUEST':
      return initial_state;
    default:
      return state;
  }
}