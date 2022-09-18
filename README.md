# CSVReader
APIs to read and write data from and to any CSV file.
Included: APIs to search through book/magazine CSV data based on ISBN and author email, and sort book/magazine CSV data in order of titles t
Basic UI to view and search for book/magazine/author has been included.

### Prerequisites

You will need Node.js installed on your system to run this application.

You can get it here:
https://nodejs.org/en/download/


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/simranbhatt/CSVReader.git
   ```
3. Enter the cloned directory
   ```sh
   cd CSVReader
   ```
4. Install NPM packages
   ```sh
   npm install

5. Create your .env file (where environment variables are specified. If you aren't sure how this works, don't worry.
   Just run the below command and use the application as is.
   ```sh
   cp .env_template .env
   ```
   If you do know how this works: The preset port value is 3000. File paths are as per the existing repository structure.
   You can add your desired port values and file/directory paths as required. 
    
   If you intend to use the UI, and have changed the default port value, ensure that '3000' is replaced in line 1 of index.js (with the server port number you have specified in your .env file):
   ```sh
   const uriHead = "http://localhost:{PORT}/";
   ```
7. You're good to go!
   Start the server:
   ```sh
   npm start
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

###Usage

> To use the view/search functionalities from the UI, you can simply open index.html in the CSVReader directory.

> To interact with the APIs, you can use the following URIs (replace "3000" with the port value specified in your .env file if changed):

  * Get a CSV file that exists in the "files" directory (or any file directory you have specified in your .env file):
     ```sh
     http://localhost:3000/readFile/{filename}
     ```
    where {filename} is the name of the file (without the .csv extension).
    Returns data in JSON.
 

  * Write to a CSV file and save it in the "files" directory  (or any file directory you have specified in your .env file):
     ```sh
    http://localhost:3000/writeFile/{filename}
    ```
    the contents of the file should be specified in JSON in the request body. The expected format is: 
    ```sh
   [
   {
    "columnname1":"column contents", 
    "columnname2":"column contents"
    }  
  ]  
  ```
  with any number of columns and objects.
  
  * Get sorted books and magazines from the provided sample files:
    ```sh
    http://localhost:3000/sortedTitles
    ```
  *Get book based on ISBN:
  ```sh
    http://localhost:3000/findByISBN/{isbn}
    ```
  *Get book based on author email address:
   ```sh
    http://localhost:3000/findByAuthor/{email}
    ```



