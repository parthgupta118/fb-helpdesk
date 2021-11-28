# FB HelpDesk

> Social network for Users

This is a MERN stack application, a small social network app that includes authentication, profiles and posts.

# Quick Start 🚀

### Add a default.json file in config folder with the following

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build

```
Create your Heroku project

```bash
heroku create
```

And push the local production branch to the remote heroku main branch.

```bash
git push heroku main
```

Now Heroku will have the config it needs to build the project.

After deployment you can delete the production branch if you like.

```bash
git checkout main
git branch -D production
```

Or you can leave it to merge and push updates from another branch.  
Make any changes you need on your main branch and merge those into your production branch.

```bash
git checkout production
git merge main
```

Once merged you can push to heroku as above and your site will rebuild and be updated.

---

### Author

Parth Gupta

### Version

1.0.0
