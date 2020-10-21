import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Container, ModalContainer, ModalBody, ButtonForm, ButtonText, HorizontalLine, RowDirection, ButtonAdd, ButtonRemove } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, TouchableWithoutFeedback, Text, View, KeyboardAvoidingView } from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [typeForm, setTypeForm] = useState(false);
  const [modalForm, setModalForm] = useState({ open: false, typeForm: false })

  const [moneyStatus, setMoneyStatus] = useState([
    {
      name: 'Income',
      value: 3854,
      color: '#0085CC',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Expense',
      value: 851.5,
      color: '#F71735',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Balance',
      value: 3002.5,
      color: '#44CF6C',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}
    >
      <HorizontalLine />
      <HorizontalLine />
      <RowDirection>
        <ButtonAdd onPress={() => navigation.navigate('Form', { typeForm: 'Income' })}>
          <MaterialIcons
            name='add'
            size={24}
            style={{ color: '#fff' }}
          />
        </ButtonAdd>
        <ButtonRemove onPress={() => navigation.navigate('Form', { typeForm: 'Expense' })}>
          <MaterialIcons
            name='remove'
            size={24}
            style={{ color: '#fff' }}
          />
        </ButtonRemove>
      </RowDirection>
    </SafeAreaView >
  );
};

export default Home;