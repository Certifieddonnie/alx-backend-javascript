export default function concatArrays(array1, array2, string) {
    const joint = [ ...array1, ...array2, ...string];
    return joint;
}