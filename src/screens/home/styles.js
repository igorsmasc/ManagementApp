import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.View`
  height: 85%;
  width: 90%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const RowDirection = styled.View`
  flex-direction: row;
`;

export const ButtonForm = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 35px;
  margin-top: 10px;
  background-color: #ccc;
`;

export const ButtonAdd = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 35px;
  margin: 10px;
  background-color: blue;
  border-radius: 50px;
`;

export const ButtonRemove = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 35px;
  margin: 10px;
  background-color: red;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  color: #000;
`;

export const HorizontalLine = styled.View`
  width: 95%;
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
  elevation: 1;
`;
