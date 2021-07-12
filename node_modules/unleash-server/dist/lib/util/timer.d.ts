declare const timer: {
    seconds: (diff: [number, number]) => number;
    new: () => () => number;
};
export default timer;
