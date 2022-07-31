import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, List} from '../../component';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chat')}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Janie"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white},
});
