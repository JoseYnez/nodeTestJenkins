pipeline {
    agent any
    stages {
        stage('test') {
            docker { image 'node:16.13.1-alpine' }
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test'
            }
        }
        stage('build') {
            agent{
              docker { image 'node:16.13.1-alpine' }
              }
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test'
            }
        }
    }
}