import chalk from "chalk";

const { bgRed, bgGreen, bgCyan, bgYellow } = chalk;

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

const printWeather = (res, icon) => {
  const message = `
    ${bgYellow(" WEATHER ")} Погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed}
  `.split("\n").map((str) => str.trim()).join("\n ");
  console.log(message);
};

export { printError, printSuccess, printHelp, printWeather };
