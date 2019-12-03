import fs from'fs'
import path from 'path'

const contents = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

export const stringToArrayOfNumbers = (string) => {
  return string.split('\n').map(val => parseInt(val))
}

export const calculateFuelForModule = (_module) => {
  return Math.floor(_module / 3) - 2
}

export const fuelReducer = (accumulatedFuel, _module) => {
  return accumulatedFuel + calculateFuelForModule(_module)
}

export default function calculateTotalFuel (providedModules) {
  const modules = providedModules || stringToArrayOfNumbers(contents)
  const totalFuel = modules.reduce(fuelReducer, 0)

  return totalFuel
}
