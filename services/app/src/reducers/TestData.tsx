import {ContentRating, Genre, Language} from 'shared/schema/Constants';
import {initialMultiplayer} from './Multiplayer';
import {DifficultyType, FontSizeType, MultiplayerState, SearchParams, SettingsType} from './StateTypes';
export const Settings: {[k: string]: SettingsType} = {
  basic: {
    audioEnabled: false,
    autoRoll: false,
    contentSets: {
      horror: false,
      future: false,
    },
    difficulty: 'NORMAL' as DifficultyType,
    experimental: false,
    fontSize: 'NORMAL' as FontSizeType,
    multitouch: true,
    numLocalPlayers: 3,
    showHelp: true,
    simulator: false,
    timerSeconds: 10,
    vibration: true,
  },
};

export const Multiplayer: {[k: string]: MultiplayerState} = {
  basic: {...initialMultiplayer},
  s2p5: {
    ...initialMultiplayer,
    session: {id: 123, secret: 'def'},
    clientStatus: {
      1: {
        connected: true,
        contentSets: ['horror', 'future'],
        numLocalPlayers: 3,
        aliveAdventurers: 3,
        type: 'STATUS',
      },
      2: {
        connected: true,
        contentSets: ['horror'],
        numLocalPlayers: 2,
        aliveAdventurers: 2,
        type: 'STATUS',
      },
    },
  },
  s2p2a1: {
    ...initialMultiplayer,
    session: {id: 123, secret: 'def'},
    clientStatus: {
      1: {
        connected: true,
        numLocalPlayers: 1,
        aliveAdventurers: 0,
        type: 'STATUS',
      },
      2: {
        connected: true,
        numLocalPlayers: 1,
        aliveAdventurers: 1,
        type: 'STATUS',
      },
    },
  },
};

export const TEST_SEARCH: SearchParams = {
  age: 31536000,
  contentrating: ContentRating.teen,
  genre: Genre.comedy,
  language: Language.english,
  maxtimeminutes: 60,
  mintimeminutes: 30,
  order: '+title',
  text: 'Test Text',
  expansions: [],
  showPrivate: true,
};
