# Quarry
Data visualization isn't always easy when you don't have time to fire up a database instance and poll data.

Try Quarry [here](http://ec2-18-188-99-154.us-east-2.compute.amazonaws.com:3000)

Want to learn how deployment of this application was done? Click [here](https://medium.com/@balghazi/deploying-react-node-js-application-to-amazon-ec2-instance-a89140ab6aab)

# Deployment (From your local machine):
1. Navigate to any local directory
2. Use Rsync to copy over all existing local files over to EC2 instance:
```
rsync -ravze “<Your AWS Pem Key Here>” —exclude ‘.git/‘ —exclude ‘node_modules/‘ AppDirectory/Quarry/client/*  ec2-user@ec2-18-188-99-154.us-east-2.compute.amazonaws.com:/home/ec2-user/var/www/myapp/client
```
```
rsync -ravze “<Your AWS Pem Key Here>” —exclude ‘.git/‘ —exclude ‘node_modules/‘ AppDirectory/Quarry/server/*  ec2-user@ec2-18-188-99-154.us-east-2.compute.amazonaws.com:/home/ec2-user/var/www/myapp/server
```
Note that we `rsync` twice, once for client, and once for server.

# Deployment (AWS End):
1. SSH into AWS EC2:
`ssh -i "<Your AWS Pem Key here>" ec2-user@ec2-18-188-99-15us-east-2.compute.amazonaws.com`
2. Navigate To EC2 Deployment Folder:
`cd /home/ec2-user/var/www/myapp/`
3. Start the server and client applications using the pm2 script:
`pm2 start Quarry.config.js`
