In this project Azure database is attached
Backend is working as to link the database with the frontend
Frontend with link with backend http://backend:5000
When we run the terraform it links with the docker-compose file and then both the image being pulled from the docker hub
Terraform will crate the infra and simultaneously pull the image and run the container.
If you want to update the backend and frontend clone to local make the changes into the file and push to git hub
After push it will trigger and pushed the latest image to docker hub.
