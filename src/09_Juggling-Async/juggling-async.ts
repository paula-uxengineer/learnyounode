const http6 = require('http');

const urls = process.argv; // retrieve all the URLs from command line arguments

function request(url: string): Promise<string> { //make HTTP with method GET yo request to a specified URL and return a promise
  return new Promise((resolve, reject) => {

    http6
    .get(url, (response: any) => {
        let result: string = '';

        response.on('data', (chunk: string) => { //listen for 'data' events to receive response data chunks
          result += chunk.toString();
        });

        response.on('end', () => { // listen for 'end' event to indicate the end of the response
          resolve(result);
        });
      })
      .on('error', (error: Error) => { // listen for 'error' event in case of HTTP request error
        reject(error);
      });
  });
}

async function allContentUrls() : Promise<string[]> { // function to asynchronously fetch content from multiple URLs and return as an array of strings fetched
  let allContent: string[] = [];
  
    for (let i = 2; i <= 4; i++) {
      let content : string = await request(process.argv[i]); // wait for the response
        allContent.push(content);
    }

  return allContent; 
}

allContentUrls()
.then((data: string[]) => data.forEach((thisData) => console.log(thisData))) // whem all content is fetched, log each fetched content to the console
.catch((error: Error) => console.log(error)) // if any error occurs during fetching, log the error to the console
