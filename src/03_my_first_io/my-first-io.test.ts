const fs = require('fs');
import { filename, read} from "./my-first-io";

describe('countLines', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test('should return the correct number of lines', () => {
      // Simulamos un archivo con 3 líneas
      const fileContent = 'linea1\nlinea2\nlinea3';
      fs.readFileSync.mockReturnValue(fileContent);
  
      const result = filename('testfile.txt');
  
      expect(result).toBe(3);
      expect(fs.readFileSync).toHaveBeenCalledWith('testfile.txt');
    });
});