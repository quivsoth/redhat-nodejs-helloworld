# Sample Hello World Node.Js app for OCP
Quick hello world app that uses express.js - sample created as quick import for OCP

## To run this application
```
1. oc new-project <project name>
2. oc new-app nodejs~https://github.com/quivsoth/redhat-nodejs-helloworld
3. oc expose svc/redhat-nodejs-helloworld
4. From the topology window click on the newly created pod and look for the newly created route
```