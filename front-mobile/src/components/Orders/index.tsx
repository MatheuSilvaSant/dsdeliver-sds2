import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ScrollView, Alert} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fetchOrders} from '../../api/api';
import { Order } from '../../interfaces/types';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  const fetchData = () =>{
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(error =>  Alert.alert('Houve um erro ao buscar os pedidos'))
      .finally(()=> setIsLoading(false));
  }

  useEffect(()=>{
   if(isFocused){
     fetchData();
   }
  },[isFocused]);

const handlerOnPress = (order: Order) =>{
      navigation.navigate('OrderDetails',{
        order
      })
}


  return (
   <>
    <Header/>
    <ScrollView  style={styles.container} >
       {isLoading ? (
         <Text>Buscando pedido...</Text>
       ) : (orders.map(order=>(
          <TouchableNativeFeedback 
          key={order.id} 
          onPress={() => handlerOnPress(order)}
          
          >
            <OrderCard order={order} />
          </TouchableNativeFeedback>
      )))}
    </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%',
    }
});
