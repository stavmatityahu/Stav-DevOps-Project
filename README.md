# stav-DevOps-project
# Stav DevOps Project

This project demonstrates a complete DevOps workflow: infrastructure as code (IaC), React application development, Docker containerization, automated testing, CI/CD pipeline using Jenkins, and deployment on AWS EC2.

## Project Overview

- Frontend: React (with a personal portfolio UI)
- Infrastructure: AWS provisioned via Ansible
- Containerization: Docker & Docker Compose
- CI/CD: Jenkins pipeline
- Testing: Jest (unit) and Playwright (end-to-end)
- Secrets Management: Ansible Vault

---

## Prerequisites

Before you begin, ensure the following:

1. You have an **AWS account**.
2. You have created an **EC2 key pair** and downloaded the `.pem` file.
3. You have the following tools installed on your machine:
   - Python 3.8+
   - `pip`
   - Node.js & npm
   - Ansible
   - Docker
   - Git

To install the required tools on a Debian/Ubuntu system:

```bash
sudo apt update
sudo apt install python3 python3-pip nodejs npm docker.io ansible git
