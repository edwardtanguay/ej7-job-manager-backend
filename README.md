# ej2-job-manager-backend

- **What we will build**
	- we will extend our full-stack MERN application to which [we just added JWT to authenticate our users](https://edwardtanguay.netlify.app/howtos?id=589)
	- we will base our authorization on a concept of users, groups and pages
		- each user has a list of groups to which they belong
		- each page has a list of groups to which it allows access
		- there is always an active user, if no users is logged in, then anonymous user is active, who also belongs to specific groups
	- we will build a new collection called users
		- passwords stored as bcrypt hashes
- **What we will use**
	- backend
		- Node
		- Express
		- MongoDB
		- bycript
	- frontend
		- React (Vite)
		- Sass
