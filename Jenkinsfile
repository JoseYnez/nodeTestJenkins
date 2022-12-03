node {
   def gitcommit
   stage('Verificacion SCM') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     gitcommit = readFile('.git/commit-id').trim()
   }
   
   stage('test') {
     def contenedortest = docker.image('node:4.6')
     contenedortest.pull()
     contenedortest.inside {
       sh 'npm install'
       sh 'npm test'
     }
   }  
    stage('format file') {
       sh 'npm format'
     }
   stage('build') {
     sh 'docker-compose build'
     sh 'docker-compose down'
     sh 'docker-compose up -d'
   }                
}