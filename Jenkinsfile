pipeline {
  agent any
    environment {
        CI = 'true'
    }
  tools {nodejs "node"}
  stages {     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
  }
}