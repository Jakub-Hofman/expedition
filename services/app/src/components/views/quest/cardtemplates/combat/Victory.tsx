import Button from 'app/components/base/Button';
import Card from 'app/components/base/Card';
import {CONTENT_SET_FULL_NAMES, MAX_ADVENTURER_HEALTH} from 'app/Constants';
import {EventParameters, Loot} from 'app/reducers/QuestTypes';
import {CardThemeType, ContentSetsType} from 'app/reducers/StateTypes';
import * as React from 'react';
import {capitalizeFirstLetter, formatImg, numberToWord, NUMERALS} from '../Render';
import {ParserNode} from '../TemplateTypes';
import {CombatState} from './Types';
import {StateProps as StatePropsBase} from './Types';

export interface StateProps extends StatePropsBase {
  combat: CombatState;
  victoryParameters: EventParameters;
  theme: CardThemeType;
  contentSets: Set<keyof ContentSetsType>;
}

export interface DispatchProps {
  onEvent: (node: ParserNode, event: string) => void;
}

export interface Props extends StateProps, DispatchProps {}

function renderHealing(props: Props): JSX.Element|null {
  if (props.victoryParameters.heal && props.victoryParameters.heal > 0 && props.victoryParameters.heal < MAX_ADVENTURER_HEALTH) {
    return (
      <p><strong>Heal {props.victoryParameters.heal} health</strong> (All adventurers, even if at 0 health).</p>
    );
  } else if (props.victoryParameters.heal === 0) {
    return (
      <p><strong>Do not heal</strong>.</p>
    );
  } else {
    return (
      <p><strong>Heal to full health</strong> (All adventurers, even if at 0 health).</p>
    );
  }
}

function maybeRenderPersona(props: Props): JSX.Element|null {
  if (!props.contentSets.has('horror')) {
    return null;
  }

  return (
    <span>
      <img className="inline_icon" src={'images/' + formatImg('horror', props.theme) + '.svg'} /><strong>{CONTENT_SET_FULL_NAMES.horror}:</strong> Keep your current Persona level.
    </span>
  );
}

function maybeRenderLoot(props: Props): JSX.Element|null {
  if (!(props.victoryParameters.loot !== false && props.combat.loot && props.combat.loot.length > 0)) {
    return null;
  }

  const renderedLoot = props.combat.loot.map((loot: Loot, index: number) => {
    return (<li key={index}><strong>{capitalizeFirstLetter(numberToWord(loot.count))} tier {NUMERALS[loot.tier]} loot</strong></li>);
  });

  return (
    <span>
      <h2>Draw Loot <img className="inline_icon" src={'images/' + formatImg('loot', props.theme) + '.svg'}></img></h2>
      <ul>
        {renderedLoot}
      </ul>
      {props.settings.showHelp && <p>Divide the loot amongst adventurers. It can be used at any time and does not cost an action (unless otherwise specified).</p>}
    </span>
  );
}

function maybeRenderLevelUp(props: Props): JSX.Element|null {
  if (!(props.victoryParameters.xp !== false && props.combat.levelUp)) {
    return null;
  }
  return (
    <span>
      <h2>LEVEL UP! <img className="inline_icon" src={'images/' + formatImg('cards', props.theme) + '.svg'}></img></h2>
      <p>All adventurers may learn a new ability{(props.settings.showHelp) ? ':' : '.'}</p>
      {props.settings.showHelp && <span>
        <ul>
          <li>Draw 3 abilities from one of the decks listed on your adventurer card.</li>
            {props.contentSets.has('horror') && <ul>
              <li>
                <img className="inline_icon" src={'images/' + formatImg('horror', props.theme) + '.svg'} />
                <strong>{CONTENT_SET_FULL_NAMES.horror}:</strong> All adventurers may also draw from the Influence deck.
              </li>
            </ul>}
          <li>Add 1 to your ability deck, and place the remaining 2 at the bottom of the deck you drew from.</li>
          <li>You <i>may</i> choose to discard an ability.</li>
        </ul>
      </span>}
      {props.contentSets.has('future') && <span>
        <p>
          <img className="inline_icon" src={'images/' + formatImg('synth', props.theme) + '.svg'} />
          <strong>The Future:</strong> Adventurers can learn or advance a skill instead of learning an ability.
        </p>
        {props.settings.showHelp && <span>
          <ul>
            <li>Draw 3 skills and select one of them.</li>
            <li>Place it face up near your adventurer, and add a clip at the leftmost level position.</li>
            <li>Place the remaining 2 at the bottom of the skill deck.</li>
          </ul>
        </span>}
      </span>}
    </span>
  );
}

export default function victory(props: Props): JSX.Element {
  return (
    <Card title="Victory" theme="dark" inQuest={true}>
      <h2>Reset <img className="inline_icon" src={'images/' + formatImg('adventurer', props.theme) + '.svg'}></img></h2>
      {props.settings.showHelp && <p>Shuffle all of your ability cards back into your ability draw pile.</p>}
      {renderHealing(props)}
      {maybeRenderPersona(props)}
      {maybeRenderLoot(props)}
      {maybeRenderLevelUp(props)}
      <Button onClick={() => props.onEvent(props.node, 'win')}>Next</Button>
    </Card>
  );
}
