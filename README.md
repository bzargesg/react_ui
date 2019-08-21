# Simplifi

A React.js project for simple employee management

## Example
[Simplifi Youtube](https://youtu.be/I_pccWnUV9c)\
\
![Landing Page](https://media.giphy.com/media/kEE1onPL1Y13Fjn4jb/giphy.gif)\
![Application Login](https://media.giphy.com/media/VFBeTfaTyo5ENBYiNg/giphy.gif)\
![Application Tour](https://media.giphy.com/media/XgYoZVPffxqc2QWF1C/giphy.gif)\
![Pagination](https://media.giphy.com/media/chJhccrOaKlCbAbabF/giphy.gif)\
![Activate/Deactivate Employee](https://media.giphy.com/media/M8RBHrle0msfSKxNMz/giphy.gif)\
![Edit Employee](https://media.giphy.com/media/h6fBPuYzItQOFIkhPN/giphy.gif)\
![Add Employee](https://media.giphy.com/media/icU7DNlMduyReGSgTh/giphy.gif)

## Getting Started

1. Run "npm install"
2. Run "npm run build"
   1. This will generate the bundle file
3. Run node server.js
4. The server will run on localhost:8000

## Running the application

***Requires a github login in order to log into the service
must add the application at https://github.com/settings/applications/
1. Go to the Developer settings on the sidebar
2. Go To Oauth Apps on the sidebar
3. Add the application name
4. For the homepage and callback url add http://localhost:8000/
then in the server file add both a clientID and client Secret
5. Then set a variable in server.js for clientID and clientSecret as provided.
#### Login
1. Log in through github then you should land on the use page.
#### Navigation  
  ##### Employees
1. Employees are listed 10 at a time
   1. click next or previous in order to look at more employees
2. Click show more under an employee to show the rest of the information for that employee.
   1. Under this menu click edit employee to edit fields.
   2. The fields will remember previous values.
  ##### Add Employees
1. Click add employee to open employee addition menu.
   1. Fill out fields for corresponding values
   2. click either active or inactive text to set.

### Prerequisites

node >= 6.1

## Built With

* [React.JS](https://reactjs.org/) - Javascript library
* [Expressjs](https://expressjs.com/) - Web framework for Node.JS
* [Node.js](https://nodejs.org/en/about/) - Javascript runtime for servers

## Authors

* **Bevan Zarges**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Html5up
* Flaticon

