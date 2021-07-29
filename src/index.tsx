import { NativeModules } from 'react-native';

type IovationDeviceprintType = {
  multiply(a: number, b: number): Promise<number>;
};

const { IovationDeviceprint } = NativeModules;

export default IovationDeviceprint as IovationDeviceprintType;
