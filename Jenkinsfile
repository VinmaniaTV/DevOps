pipeline {
  agent any
    environment {
        CI = 'true'
    }
  tools {nodejs "nodejs"}
  stages {     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
  }
}