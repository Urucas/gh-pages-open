import gitBranches from 'git-branches'
import gitRepoName from 'git-repo-name'
import gitUserName from 'git-username'

export default function url(root, cb) {
  gitBranches(root).then( (branches) => {
    if(branches.indexOf("gh-pages") == -1) 
      return cb("the project dont have a gh-pages branch available", null)
      
    let user = gitUserName().replace("git@github.com:","")
    let repo = gitRepoName.sync()
    let url = `http://${user}.github.io/${repo}`
    cb(null, url)
  })
}
