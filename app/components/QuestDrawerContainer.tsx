import {PropTypes} from 'react'
import {connect} from 'react-redux'

import {QuestActionType} from '../actions/ActionTypes'
import {setDrawer} from '../actions/drawer'
import {saveQuest, publishQuest, unpublishQuest} from '../actions/quest'
import {DirtyState, QuestType, AppState} from '../reducers/StateTypes'
import QuestDrawer, {QuestDrawerStateProps, QuestDrawerDispatchProps} from './QuestDrawer'
import {MARKDOWN_GUIDE_URL} from '../constants'


const mapStateToProps = (state: AppState, ownProps: any): QuestDrawerStateProps => {
  return {
    quest: state.quest,
    drawer: state.drawer,
    dirty: state.dirty,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: any): QuestDrawerDispatchProps => {
  return {
    onMenuSelect: (action: QuestActionType, dirty: DirtyState, quest: QuestType) => {
      switch(action) {
        case 'SAVE_QUEST':
          return dispatch(saveQuest(quest));
        case 'NEW_QUEST':
          window.open('/');
          break;
        case 'PUBLISH_QUEST':
          return dispatch(publishQuest(quest));
        case 'UNPUBLISH_QUEST':
          return dispatch(unpublishQuest(quest));
        case 'DRIVE_VIEW':
          window.open('https://drive.google.com/drive/search?q=' + quest.metaTitle);
          break;
        case 'HELP':
          window.open(MARKDOWN_GUIDE_URL, '_blank');
          break;
        case 'FEEDBACK':
          window.open("http://expeditiongame.com/contact");
          break;
        default:
          throw new Error("Could not handle menu action " + action);
      }
    },
    onDrawerRequestChange: () => {
      dispatch(setDrawer("", false));
    },
  };
}

const QuestDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestDrawer);

export default QuestDrawerContainer