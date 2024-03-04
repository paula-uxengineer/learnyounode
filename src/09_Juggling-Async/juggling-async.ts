const http6 = require('http');

const urls = process.argv;

function request(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http6
    .get(url, (response: any) => {
        let result: string = '';
        response.on('data', (chunk: string) => {
          result += chunk.toString();
        });
        response.on('end', () => {
          resolve(result);
        });
      })
      .on('error', (error: Error) => {
        reject(error);
      });
  });
}

async function allContentUrls() : Promise<string[]> {
  let allContent: string[] = [];
  
    for (let i = 2; i <= 4; i++) {
      let content : string = await request(process.argv[i]);
        allContent.push(content);
    }
    
  return allContent;
}

allContentUrls()
.then((data: string[]) => data.forEach((thisData) => console.log(thisData)))
.catch((error: Error) => console.log(error))
