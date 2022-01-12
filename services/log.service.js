import chalk from "chalk";

const { bgRed, bgGreen, bgCyan } = chalk;

const printError = (error) => {
  console.log(`${bgRed(" ERROR ")} ${error}`);
};

const printSuccess = (message) => {
  console.log(`${bgGreen(" SUCCESS ")} ${message}`);
};

const printHelp = () => {
  const message = `
    ${bgCyan(" HELP ")}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
  `.split("\n").map((str) => str.trim()).join("\n ");
  console.log(message);
};

export { printError, printSuccess, printHelp };
