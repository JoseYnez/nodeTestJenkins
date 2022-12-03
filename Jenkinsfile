pipeline {
    agent any
    stages {
        stage('test') {
            agent {
            docker { image 'node:16.13.1-alpine' }
            }
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test'
            }
        }
        stage('build') {
            agent any
            steps {
                sh 'docker-compose build'
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }  
    }
}