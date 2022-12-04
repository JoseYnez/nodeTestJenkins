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
            emailext subject: '$DEFAULT_SUBJECT',
                        body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}",
                        recipientProviders: [
                            [$class: 'CulpritsRecipientProvider'],
                            [$class: 'DevelopersRecipientProvider'],
                            [$class: 'RequesterRecipientProvider']
                        ], 
                        replyTo: '$DEFAULT_REPLYTO',
                        to: 'yanezluis264@gmail.com'
        }
    }
}