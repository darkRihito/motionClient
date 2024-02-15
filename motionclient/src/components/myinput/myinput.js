export const InputStyle =
  "rounded-xl w-full h-12 ps-4 p-2.5 border bg-yellow-950  focus:ring-transparent text-light-white focus:outline-none focus:border  border-none";

export const InputStyleSVG =
  "rounded-xl w-full h-12 ps-10 p-2.5 border bg-yellow-950  focus:ring-transparent text-light-white focus:outline-none focus:border  border-none";

export const InputStyleColor = ({bgColor, textColor}) => {
  return `rounded-xl w-full h-12 ps-4 p-2.5 border ${bgColor} focus:ring-transparent ${textColor} focus:outline-none focus:border border-none`;
};
