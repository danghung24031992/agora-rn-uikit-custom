import React from 'react';
import {ScrollView, View} from 'react-native';
import RtcConfigure from './RTCConfigure';
import MaxVideoView from './MaxVideoView';
import MinVideoView from './MinVideoView';
import {MinUidConsumer} from './MinUidContext';
import {MaxUidConsumer} from './MaxUidContext';
import {PropsProvider, PropsInterface} from './PropsContext';

import styles from './Style';
import LocalControls from './Controls/LocalControls';

// import console = require('console');

const AgoraUIKit: React.FC<PropsInterface> = (props) => {
  return (
    <PropsProvider value={props}>
      <View>
        <RtcConfigure>
          <MaxUidConsumer>
            {(maxUsers) => {
              console.log("🚀 ~ file: AgoraUIKit.tsx ~ line 33 ~ maxUsers", maxUsers)
              return (<MaxVideoView user={maxUsers[0]} key={maxUsers[0].uid} />)
            }}
          </MaxUidConsumer>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.minContainer}>
            <MinUidConsumer>
              {(minUsers) => {
                console.log("🚀 ~ file: AgoraUIKit.tsx ~ line 33 ~ minUsers", minUsers)
                return minUsers.map((user) => (
                  <MinVideoView user={user} key={user.uid} />
                ))
              }}
            </MinUidConsumer>
          </ScrollView>
          <LocalControls  showButton={false}/>
        </RtcConfigure>
      </View>
    </PropsProvider>
  );
};

export default AgoraUIKit;
