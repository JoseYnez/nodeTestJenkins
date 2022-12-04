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
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}