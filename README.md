# Employee Tracker

![license badge](https://img.shields.io/github/license/dmartin4820/employee-tracker)

## Table of Contents
* [Description](#Description)
* [How it works](#how-it-works)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Acknowledgments](#Acknowledgments)
* [Questions](#Questions)

## Description 
Employee tracker is a command-line utility that allows a user that owns a company to create departments, roles for those departments, and add employees. In addition to adding employees, a manager for the employee and role can be specified.

## How it works
This program makes use of MySQL to create 3 tables in a company database with relations between them and one self-related table. To create the tables, MySQL can be used to `SOURCE` the `schema.sql` file and fill the database by using `SOURCE` on the `seeds.sql` file. These two steps create the database on the users local machince. 

The database is accessed by Javascript through the mysql2 package. The specific implementation here relies on a template `Database` which creates the connection to the company database and contains the necessary functions to do the 'heavy-lifting' of the employee tracker. Some of that 'heavy-lifting' has to do with making SQL queries to the database through the mysql2 connection. 

The prompts are mainly handled in the index.js function. The user is prompted and the template `Database` is utilized here in some helper functions to display the table nicely using `console.table`.


## Installation
First clone the repository:

```git clone https://github.com/dmartin4820/employee-tracker.git```

To run the code after cloning, three packages are needed: mysql2, console.table, and inquirer. These can be installed by running `npm i` inside of the cloned repository.

It is also necessary to have MySQL installed on your computer. Installation instructions can be found [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

Once MySQL is installed, connect to the mysql server by running (assuming correct install) :

```mysql -u root -p```.

Then run both these commands in sequence:

```SOURCE schema.sql```

```SOURCE seeds.sql``` (For test entries in database)


## Usage 
Start the program by running `node index.js`

Below is a demonstration of some of the actions a user can take when running the employee tracker.

<h3 align="center"> View all departments </h3>
<p align="center">
	<img src="https://media.giphy.com/media/vMzXUPxKSIml4DRz4i/giphy.gif">
</p>

<h3 align="center"> View all employees </h3>
<p align="center">
	<img src="https://media.giphy.com/media/eLGp8ntPRRKAp5L2kx/giphy.gif">
</p>

<h3 align="center"> View all roles </h3>
<p align="center">
	<img src="https://media.giphy.com/media/LvWu0U9yBCb8R3Xgh6/giphy.gif">
</p>

<h3 align="center">  Add employees</h3>
<p align="center">
	<img src="https://media.giphy.com/media/8jOxUQwIZv6L0JofLi/giphy.gif">
</p

To see a full demonstration of the main features of employee tracker, follow [this link](https://drive.google.com/file/d/1d4Lpi_l0xrG-pxetfrmVExGGfh9TXD37/view?usp=sharing).

For a demonstration of additional features adding onto the main features, follow [this link](https://drive.google.com/file/d/1p9xcPsdSq9HYybn-M96aFBWYA-vebYTn/view?usp=sharing)

## Contributors
Denzal Martin

## Acknowledgments
Thank you to the UC Berkeley Bootcamp teaching staff for providing great resources and teaching to make doing this project simpler. The idea of this project is completely the UC Berkeley Bootcamp's idea along with the basic scheme for the database, but the code is implemented from scratch.

## Questions
Find my contact details at [GitHub](https://github.com/dmartin4820)

Or contact by email: dom4822@yahoo.com

