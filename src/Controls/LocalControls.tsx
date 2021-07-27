import React, {useContext} from 'react';
import {View} from 'react-native';
import styles from '../Style';
import EndCall from './Local/EndCall';
import LocalAudioMute from './Local/LocalAudioMute';
import LocalVideoMute from './Local/LocalVideoMute';
import SwitchCamera from './Local/SwitchCamera';
import PropsContext from '../PropsContext';
import LocalUserContextComponent from '../LocalUserContext';
import RemoteSpeaker from './Remote/RemoteSpeaker';
import { SpeakerUiConsumer } from '../SpeakerUiContext';

function Controls(props) {
  const {styleProps} = useContext(PropsContext);
  const {localBtnContainer} = styleProps || {};
  const showButton = props.showButton !== undefined ? props.showButton : true;
  return (
    <LocalUserContextComponent>
      <View style={{...styles.Controls, ...(localBtnContainer as object)}}>
        <LocalAudioMute />
        <LocalVideoMute />
        <EndCall />
        <SwitchCamera />
        <SpeakerUiConsumer>
        {(isMuted) => (
          <RemoteSpeaker isMuted={isMuted} />
        )}
      </SpeakerUiConsumer>
      </View>
    </LocalUserContextComponent>
  );
}

export default Controls;
