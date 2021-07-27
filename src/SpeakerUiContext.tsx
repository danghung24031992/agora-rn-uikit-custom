import React from 'react';
import {UidStateInterface} from './RtcContext';

const SpeakerUiContext = React.createContext<UidStateInterface['muteAllRemote']>([]);
export const SpeakerUiProvider = SpeakerUiContext.Provider;
export const SpeakerUiConsumer = SpeakerUiContext.Consumer;
export default SpeakerUiContext;
