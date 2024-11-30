import generateRandomNumber from "./generate-random-number";

export default function generateBasedOnFractional(input) {
    const floorValue = Math.floor(input);
    const fractionalPart = input - floorValue;

    return (generateRandomNumber() / (0xFFFFFFFF + 1)) < fractionalPart ? floorValue + 1 : floorValue;
};