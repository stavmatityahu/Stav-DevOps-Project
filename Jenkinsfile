pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:$PATH"
        DOCKER_ENV = credentials('docker.env')  
        ENV_FILE = credentials('.env')
        AWS_ACCESS_KEY_ID = credentials('Access-key-ID')
        AWS_SECRET_ACCESS_KEY = credentials('Secret-access-key')
        ANSIBLE_HOST_KEY_CHECKING = 'False'
    }

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Prep docker images') {
            steps {
                sh 'docker pull node:slim || true'
                sh 'docker pull nginx:alpine || true'
            }
        }

        stage('Hello') {
            steps {
                echo 'Hello World from Jenkins Pipeline!!'
            }
        }

        stage('Build') {
            steps {
                sh '''
                    echo "Building project..." 
                    node --version
                    npm --version 
                    npm ci 
                    npm run build 
                    ls -la
                '''
            }
        }

        stage('Tests'){
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh '''
                            echo "Running Unit tests" 
                            npm run test:junit
                        '''
                    }
                    post {
                        always {
                            junit 'jest-results/junit.xml'
                        }
                    }
                }

                stage('E2E Tests') {
                    steps {
                        sh '''
                            echo "Starting server..." 
                            npx serve -s build &
                            sleep 10 
                    
                            echo "Running E2E tests..."
                            npx playwright test --reporter=html
                        '''
                    }
                    post {
                        always {
                            publishHTML([
                                allowMissing: false, 
                                alwaysLinkToLastBuild: false, 
                                keepAll: false, 
                                reportDir: 'playwright-report', 
                                reportFiles: 'index.html', 
                                reportName: 'Playwright Report', 
                                reportTitles: '', 
                                useWrapperFileDirectly: true
                            ])
                        }
                    }
                }
            }
        }

        stage('Build or Pull Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-credentials', variable: 'DOCKER_HUB_TOKEN')]) {
                    sh '''
                        echo "$DOCKER_HUB_TOKEN" | docker login -u stav3434 --password-stdin

                        IMAGE=stav3434/stav-devops-project:latest

                        echo "Checking if image exists on Docker Hub..."
                        if docker manifest inspect $IMAGE > /dev/null 2>&1; then
                            echo "Image exists on Docker Hub"
                        else
                            echo "Image not found on Docker Hub. Building and pushing..."
                            docker buildx create --use || true
                            docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE . --push
                        fi
                    '''
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                withCredentials([string(credentialsId: 'ansible-vault-password', variable: 'VAULT_PASSWORD')]) {
                    dir('ansible') {
                        sh '''
                            echo "$VAULT_PASSWORD" > .vault_password
                            chmod 600 .vault_password
                            ansible-playbook -i localhost, ansible.yaml --vault-password-file .vault_password
                            
                            # יצירת inventory אם צריך לשלב הבא
                            if [ -f server-info.env ]; then
                                source server-info.env
                                echo "[app_servers]" > inventory.ini
                                echo "${SERVER_IP} ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/stav-devops-project-key.pem" >> inventory.ini
                            fi
                            
                            rm -f .vault_password
                        '''
                    }
                }
            }
        }

    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
