const fs = require('fs');
import { filename, read} from "./my-first-io";

jest.mock('fs', () => ({ //mock the fs module
  readFileSync: jest.fn(() => 'line1\nline2\nline3\n') // mock readFileSync to return a string containing three lines
}));

test('read function returns the correct number of lines', () => {
  const result = read;
  expect(result).toBe(3); 
  
});