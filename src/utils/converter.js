// import twoDimensionalParity from './twoDimensionalParity';
// import sixteenBitChecksum from './sixteenBitChecksum';
// import sixteenCrc from './sixteenCrc';
import hamming from './hamming';

export const convertions = {
  // 'Paridade bi-dimensional': twoDimensionalParity,
  // 'Checksum 16-bits': sixteenBitChecksum,
  // 'CRC-16: x^16 + x^12 + x^5 + 1': sixteenCrc,
  Hamming: hamming,
};

export default function conversor({ type, data }) {
  if (!convertions[type] || data === '') {
    return {
      originalValue: data,
      originalPoints: [],
      convertedPoints: [],
      typeName: null,
    };
  }
  const convertedPoints = convertions[type](data);
  const newData = {
    originalValue: data,
    convertedPoints,
    typeName: type,
  };
  return newData;
}
