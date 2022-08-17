const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const numberAndCharacters = characters + numbers;

export type RandomValueType =
  | "city"
  | "date"
  | "address"
  | "state"
  | "name"
  | "pin"
  | "email"
  | "password"
  | "mobileNumber";

export interface RandomValueOptions {
  domain?: string;
  length: number;
}

export function getRandomValue(
  type: RandomValueType,
  options: RandomValueOptions
) {
  let result: string = "";

  switch (type) {
    case "name":
      for (let i = 0; i < options.length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      break;
    case "address":
      for (let i = 0; i < options.length; i++)
        result += numberAndCharacters.charAt(
          Math.floor(Math.random() * numberAndCharacters.length)
        );
      break;

    case "state":
      for (let i = 0; i < options.length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      break;

    case "city":
      for (let i = 0; i < options.length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      break;

    case "pin":
      for (let i = 0; i < options.length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      break;

    case "mobileNumber":
      for (let i = 0; i < options.length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      break;

    case "email":
      for (let i = 0; i < options.length; i++)
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      result += options.domain;

      break;

    case "password":
      for (let i = 0; i < options.length; i++) {
        result += numberAndCharacters.charAt(
          Math.floor(Math.random() * numberAndCharacters.length)
        );
      }
      break;

    default:
      break;
  }

  return result;
}
