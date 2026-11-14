\# MongoDB Security Implementation



\## 1. Authentication

MongoDB authentication was enabled through the `mongod.cfg` configuration file.



```yaml

security:

&#x20; authorization: enabled

```



\## 2. Database Users



| User | Role | Database |

|---|---|---|

| bakeryAdmin | root | admin |

| bakeryApp | readWrite | bakerypos |



\## 3. Security Features

\- Authentication using usernames and passwords.

\- Role-Based Access Control (RBAC).

\- Restricted application permissions.

\- Administrator access for database management.

\- Localhost network binding.



\## 4. Security Testing

\- Administrator login tested.

\- Application user login tested.

\- Application access to bakery records tested.

\- Unauthorised user creation tested.



\*\*Conclusion:\*\* MongoDB authentication and user permissions were configured to improve database security.

