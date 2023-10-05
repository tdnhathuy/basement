import { PayloadCheckRole, zustandUser } from '@app/zustands/user.zustand';
import { faker } from '@faker-js/faker';
import { range } from 'lodash';
import moment, { Moment } from 'moment';
import { Insets, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIOS = Platform.OS === 'ios';

export const parseArrToOptions = (
  arr: any[] = [],
  keyLabel = 'name',
  keyValue = 'id',
) => {
  return arr.map(x => ({ label: x[keyLabel], value: x[keyValue] }));
};

export const genId = () => faker.database.mongodbObjectId();
export const genString = (number = 1) => faker.lorem.words(number);

export const random = <T = {}>(arr: any[]): T =>
  faker.helpers.arrayElements(arr) as T;

export const formatNumber = (amount: string | number) => {
  return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const formatDate = (
  date: Date | string | Moment,
  format = 'DD/MM/YYYY',
) => {
  if (!date) return '';
  return moment(date).format(format);
};

export const consolelog = (...p: any) => {
  console.log(JSON.stringify(p, null, 2));
};

export const createHitSlop = (number = 5): Insets => ({
  bottom: number,
  left: number,
  right: number,
  top: number,
});

export function isIphoneWithNotch() {
  const deviceId = DeviceInfo.getDeviceId();
  const iPhonesWithNotch = [
    'iPhone10,3',
    'iPhone11,2',
    'iPhone11,4',
    'iPhone11,6',
    'iPhone11,8',
    'iPhone12,1',
    'iPhone12,3',
    'iPhone12,5',
    'iPhone12,8',
    'iPhone13,1',
    'iPhone13,2',
    'iPhone13,3',
    'iPhone13,4',
    'iPhone14,2',
    'iPhone14,3',
    'iPhone14,4',
    'iPhone14,5',
    'iPhone14,6',
    'iPhone14,7',
    'iPhone14,8',
    'iPhone15,2',
    'iPhone15,3',
  ];

  const isIphoneWithNotch = iPhonesWithNotch.includes(deviceId);
  return isIphoneWithNotch;
}

export const removeUnicode = (str: string) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
};

export function getDaysOfWeek(w: number, y: number) {
  const date = new Date(y, 0, 1 + (w - 1) * 7); // Elle's method
  date.setDate(date.getDate() + (1 - date.getDay())); // 0 - Sunday, 1 - Monday etc
  const arr = range(0, 7).map(x => moment(date).add(x, 'day'));
  return arr;
}

export const checkRole = (payload: PayloadCheckRole) =>
  zustandUser.getState().checkRole(payload);
