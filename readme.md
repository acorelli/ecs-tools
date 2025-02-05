[![](https://www.acorelli.com/ecs.jpg)](https://github.com/acorelli/ecs-tools)
  
---  
  
# **ECS Tools**  
  
**A collection of useful tools and scripts to aid developers in managing and deploying applications with Amazon Elastic Container Service (ECS).**  
  
![License](https://img.shields.io/badge/license-Unlicense-blue.svg)  
  
## **Table of Contents**  
  
- [Introduction](#introduction)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgments](#acknowledgments)  
  
## **Introduction**  
  
The **ECS Tools** repository provides a suite of scripts and configurations designed to streamline the development and deployment processes for applications utilizing Amazon ECS. These tools aim to simplify tasks such as environment setup, container management, and integration with AWS services.  
  
## **Features**  
  
- **CI/CD Scripts**: Automate the build and deployment pipeline for ECS applications.  
- **Docker Configurations**: Predefined Dockerfiles and Compose files for setting up development and production environments.  
- **AWS Integration**: Scripts to facilitate interactions & testing with AWS services like DynamoDB and S3.  
  
## **Prerequisites**  
  
Before using the tools in this repository, ensure you have the following installed:  
  
- [Docker](https://www.docker.com/get-started)  
- [AWS CLI](https://aws.amazon.com/cli/)  
- [Python 3.x](https://www.python.org/downloads/)  
- [Git](https://git-scm.com/)  
  
## **Installation**  
  
1. **Clone the Repository**:  
  
   ```bash  
   git clone https://github.com/acorelli/ecs-tools.git  
   cd ecs-tools  
   ```  
  
2. **Install Python Dependencies**:  
  
   ```bash  
   pip install -r requirements.txt  
   ```  
  
3. **Configure Environment Variables**:  
    
   - Duplicate the `.env.example` file and rename it to `.env`.  
   - Update the `.env` file with your AWS credentials and other necessary configurations.  
    
## **Usage**    
  
### **Setting Up Your AWS Environment**    
Before running any commands, make sure:  
- You have **AWS credentials configured** (via `aws configure` or environment variables).  
- Your **AWS CLI is authenticated**.  
- You define your **AWS IAM Roles and Policies**
- Substitute the appropriate **Role/Policy ARNs** in the configuration scripts
- Configure any other values in the configuration scripts as necessary
  
### **Setting Up Your Containerized Project**  
Currently the Dockerfile is designed to:
- Copy the current project directory into the container.
- Run `app.js` as the main entry point  

  
### **Starting Your AWS Environment**  
  
To **initialize** and launch your container to ECS use:  
  
```bash  
python easy_aws.py start
```  
  
This will call the `cicd_scripts/launch_cluster.py` and:
  - Create & push to the **ECR repo**  
  - Create the **ECS Cluster**  
  - Register the **task definition**  
  - Create a **service** for that cluster and task definition  
  
## **License**  
  
This project is licensed under the [Unlicense](LICENSE), making it free and unencumbered software released into the public domain.  
  
## **Acknowledgments**  
  
Special thanks to all contributors and the open-source community for their invaluable resources and support.  
  
---  
  
*Note: Ensure that any sensitive information, such as AWS credentials, is securely managed and not exposed in your codebase.*  
  
---