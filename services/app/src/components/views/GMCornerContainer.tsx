import {connect} from 'react-redux';
import Redux from 'redux';

import {Quest} from 'shared/schema/Quests';
import {previewQuest} from '../../actions/Quest';
import {GM_QUESTS} from '../../Constants';
import {AppState} from '../../reducers/StateTypes';
import GMCorner, {DispatchProps, StateProps} from './GMCorner';

const mapStateToProps = (state: AppState): StateProps => {
  return {
    quests: GM_QUESTS,
    settings: state.settings,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DispatchProps => {
  return {
    onQuestSelect(quest: Quest): void {
      dispatch(previewQuest({quest}));
    },
  };
};

const GMCornerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GMCorner);

export default GMCornerContainer;