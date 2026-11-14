\# Bakery POS and Management Database System



\## Project Overview



This is an individual Advanced Database Systems project focused on developing a Bakery Point of Sale (POS) and Management Database System.



The system manages bakery customers, employees, menu items, ingredients, orders, payments, suppliers and purchases.



\## Technologies Used



\- PostgreSQL – Relational Database Management System

\- MongoDB – NoSQL Database

\- pgAdmin – PostgreSQL administration

\- MongoDB Compass – MongoDB graphical interface

\- MongoDB Shell (mongosh) – MongoDB command interface

\- Git and GitHub – Version control and project management



\## Project Objectives



1\. Design and implement a relational database.

2\. Design and implement a MongoDB database.

3\. Implement database constraints and business rules.

4\. Implement database triggers.

5\. Manage users, roles and permissions.

6\. Implement auditing and data encryption.

7\. Configure automated database backups.

8\. Develop stored procedures.

9\. Generate management reports.

10\. Apply data-mining techniques.



\## Project Structure



\- `docs/` – Project documentation.

\- `postgresql/` – Relational database scripts.

\- `mongodb/` – MongoDB scripts and sample data.

\- `screenshots/` – Evidence of implementation and testing.

\- `reports/` – Project reports and presentation materials.



\## Project Status

// BAKERY POS DATABASE
// MongoDB collection creation

use("bakerypos");

db.createCollection("customers");
db.createCollection("employees");
db.createCollection("menu");
db.createCollection("ingredients");
db.createCollection("menu_ingredients");
db.createCollection("orders");
db.createCollection("order_items");
db.createCollection("payments");
db.createCollection("suppliers");
db.createCollection("purchases");
db.createCollection("purchase_items");

print("Bakery POS collections created successfully");

showCollections();



Development in progress.

