const px = val => ({ theme }) => theme.typography.pxToRem(val);
const colorPrimary = val => ({ theme }) => theme.palette.primary[val];
const colorCommon = val => ({ theme }) => theme.palette.common[val];

export { px, colorPrimary, colorCommon };
