node {
   def gitcommit
   stage('Verificacion SCM') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     gitcommit = readFile('.git/commit-id').trim()
   }
   
   stage('test') {
     def contenedortest = docker.image('node')
     contenedortest.pull()
     contenedortest.inside {
       sh 'npm install'
       sh 'npm run lint'
       sh 'npm run test'
     }
   }  
   stage('build') {
     sh 'docker-compose build'
     sh 'docker-compose down'
     sh 'docker-compose up -d'
   }                
}