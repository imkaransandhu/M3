# Mission - 3

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#API">API</a></li>
    <ul>
     <li><a href="#API-1">Convert "Model" and "Year" of a car to a suggested "Car Value"</a></li>
     <li><a href="#API-2">Convert "Claim History" to a "Risk Rating"</a></li>
    </ul>
    <li> <a href="#Result">Result</a> </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
​​​​​​​In this Mission, while UX Designers are working on Front End Design, we are working on the backend and apply an Agile practice of 
Test-Driven Development (TDD).  As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process.  
Each member in the team will pick one of the following 3 APIs to build.  
### But I have worked on Two API's 

#### API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"
#### API 2. Convert "Claim History" to a "Risk Rating"

<!-- BUILT WITH -->
## Built With

* React
* TypeScript
* Node
* Express
* Axios
* HTML
* CSS
* Tailwind
* Postman

<!-- API -->
# API

<!-- API-1 -->
## API-1
<table>
  <tr>
    <th>Test Case</th>
    <th>Input</th>
    <th>Expected Output</th>
    <th>Scenario</th>
  </tr>
  <tr>
    <td>1</td>
    <td>["Civic" , 2020]</td>
    <td>6620</td>   
    <td>Positive - Input -> "Civic" , 2020 => Expected -> 6620 </td>
  </tr>
    <tr>
    <td>2</td>
    <td>["Nissan     Skyline" , 2007]</td>
    <td>19107</td>   
    <td>Positive - Input -> "Nissan     Skyline" , 2007 => Expected -> 19107 </td>
  </tr>
  
  <tr>
    <td>3</td>
    <td>["Honda" , -2007]</td>
    <td>Year can't be negative or less than 1</td>   
    <td>Negative - Input -> "Honda" , -2007 => Expected -> Year can't be negative or less than 1 </td>
  </tr>
  
   <tr>
    <td>4</td>
    <td>["" , 2007]</td>
    <td>Car Name can't be empty</td>   
    <td>Negative - Input -> "Honda" , -2007 => Expected -> Car Name can't be empty </td>
  </tr>

</table>


<!-- API-2 -->
## API-2
<table>
  <tr>
    <th>Test Case</th>
    <th>Input</th>
    <th>Expected Output</th>
    <th>Scenario</th>
  </tr>
  <tr>
    <td>1</td>
    <td>crash</td>
    <td>1</td>   
    <td>Positive - Input -> "crash" => Expected -> 1 </td>
  </tr>
    <tr>
    <td>2</td>
    <td>crash crashed Crashed</td>
    <td>3</td>   
    <td>Positive - Input -> "crash crashed Crashed" => Expected -> 3 </td>
  </tr> 
   <tr>
    <td>3</td>
     <td>243</td>
    <td>invalid data type</td>   
    <td>Negative - Input -> 243 => Expected -> invalid data type </td>
  </tr>
</table>



<!-- RESULT -->
## Result

### Learning outcome 
1. Unit Testing
2. Test Driven Development
3. Creating test cases
4. TypeScript
5. Daily standup's 



