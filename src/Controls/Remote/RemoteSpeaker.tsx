import React, {useContext} from 'react';
import RtcContext, {UidInterface, DispatchType} from '../../RtcContext';
import BtnTemplate from '../BtnTemplate';
import styles from '../../Style';
import PropsContext from '../../PropsContext';

interface RemoteSpeakerInterface {
  user: UidInterface;
}

const RemoteSpeaker: React.FC<RemoteSpeakerInterface> = (props) => {
  const {RtcEngine, dispatch} = useContext(RtcContext);
  const {styleProps} = useContext(PropsContext);
  const {remoteBtnStyles} = styleProps || {};
  const {muteRemoteAudio} = remoteBtnStyles || {};

  return (
    <BtnTemplate
      name={!props.isMuted ? 'speaker' : 'speakerOff'}
      style={{...styles.localBtn, ...(muteRemoteAudio as object)}}
      onPress={() => {
        (dispatch as DispatchType<'MuteAllRemote'>)({
          type: 'MuteAllRemote',
        });
      }}
    />
  )
};

export default RemoteSpeaker;
