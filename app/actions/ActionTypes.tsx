import {UserState, QuestType, DialogIDType, ShareType} from '../reducers/StateTypes'

export const NEW_QUEST: string = 'NEW_QUEST';
export const LOAD_QUEST: string = 'LOAD_QUEST';
export const DELETE_QUEST: string = 'DELETE_QUEST';
export const SAVE_QUEST: string = 'SAVE_QUEST';
export const PUBLISH_QUEST: string = 'PUBLISH_QUEST';
export const SHARE_QUEST: string = 'SHARE_QUEST';
export const DOWNLOAD_QUEST: string = 'DOWNLOAD_QUEST';
export type QuestActionType = 'NEW_QUEST' | 'LOAD_QUEST' | 'SAVE_QUEST' | 'PUBLISH_QUEST' | 'UNPUBLISH_QUEST' | 'DRIVE_VIEW' | 'FEEDBACK' | 'HELP';

export const SIGN_IN: string = 'SIGN_IN';
export const SIGN_OUT: string = 'SIGN_OUT';

export const DrawerActions = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
  TOGGLE: 'TOGGLE'
};

export interface SetProfileMetaAction {
  type: 'SET_PROFILE_META';
  user: UserState;
}

export interface SetDialogAction extends Redux.Action {
  type: 'SET_DIALOG';
  dialog: DialogIDType;
  shown: boolean;
}

export interface SetDirtyAction extends Redux.Action {
  type: 'SET_DIRTY';
  is_dirty: boolean;
}

export interface SetDrawerAction extends Redux.Action {
  type: 'SET_DRAWER'
  is_open: boolean;
}

export interface ReceiveQuestLoadAction extends Redux.Action {
  type: 'RECEIVE_QUEST_LOAD';
  quest: QuestType;
}

export interface RequestQuestSaveAction extends Redux.Action {
  type: 'REQUEST_QUEST_SAVE';
  quest: QuestType;
}

export interface ReceiveQuestSaveAction extends Redux.Action {
  type: 'RECEIVE_QUEST_SAVE';
  quest: QuestType;
}

export interface RequestQuestPublishAction extends Redux.Action {
  type: 'REQUEST_QUEST_PUBLISH';
  quest: QuestType;
}

export interface ReceiveQuestPublishAction extends Redux.Action {
  type: 'RECEIVE_QUEST_PUBLISH';
  quest: QuestType;
}

export interface RequestQuestUnpublishAction extends Redux.Action {
  type: 'REQUEST_QUEST_UNPUBLISH';
  quest: QuestType;
}

export interface ReceiveQuestUnpublishAction extends Redux.Action {
  type: 'RECEIVE_QUEST_UNPUBLISH';
  quest: QuestType;
}