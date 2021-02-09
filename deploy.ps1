$commitMessage=$args[0]
npm run build
git add .
git commit -a -m "$commitMessage"
git push all master