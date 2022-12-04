pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'echo "hola"'
                
            }
        }  
    }
    post {
        always {
            emailext body: 'A Test 2 EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}