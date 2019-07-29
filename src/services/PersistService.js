/** 
 * Serviço de persistencia de credenciais
 * https://docs.expo.io/versions/v32.0.0/sdk/securestore/
 * IOS: usa o KeyChain do aparelho
 * Android: usa o Shared Preferences
 * APENAS AS CREDENCIAIS DE TOKEN: PUSH, AUTH E REFRESH SERAO ARMAZENADAS NO Secure Store
 */

import * as SecureStore from 'expo-secure-store';
import { AsyncStorage, Platform } from 'react-native';

export const getStorageItem = (key) => {
  let req = Platform.OS === 'ios' ? SecureStore.getItemAsync(key) : AsyncStorage.getItem(key);
  req
    .then(res => {
      if (res) return Promise.resolve(res);
      return Promise.reject(false);
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export const getStorageItemAsync = async (key) => {
  try {
    let response;
    if (Platform.OS === 'ios') response = await SecureStore.getItemAsync(key);
    else response = await AsyncStorage.getItem(key);
    return response;
  } catch (e) {
    //console.log('GET STORAGE ITEM ERROR: ', e);
    throw (e)
  }
}

export const setStorageItem = (key, value) => {
  let req = Platform.OS === 'ios' ? SecureStore.setItemAsync(key, value) : AsyncStorage.setItem(key, value);
  req
    .then(res => {
      return Promise.resolve(true);
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export const setStorageItemAsync = async (key, value) => {
  try {
    let response;
    if (Platform.OS === 'ios') response = await SecureStore.setItemAsync(key, value);
    else response = await AsyncStorage.setItem(key, value);
    return response;
  } catch (e) {
    //console.log('SET STORAGE ITEM ERROR: ', e);
    throw (e);
  }
}

export const deleteStorageItem = (key) => {
  let req = Platform.OS === 'ios' ? SecureStore.deleteItemAsync(key) : AsyncStorage.removeItem(key);
  req
    .then(res => {
      return Promise.resolve(true);
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export const deleteStorageItemAsync = async (key) => {
  try {
    let response;
    if (Platform.OS === 'ios') response = await SecureStore.deleteItemAsync(key);
    else response = await AsyncStorage.removeItem(key);
    return response;
  } catch (e) {
    throw (e)
  }
}


