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
        discordSend description: "", footer: "", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: 'https://discord.com/api/webhooks/991269136879591425/GJoABtBT1giH1ikqwZwxd8DxhIM1Op6ZhcIOZV6RWQBo8xTOYxP4QQ6zv4QTGuWQqZYT'
        //discordSend description: '', footer: '', image: '', link: '', result: '', scmWebUrl: '', thumbnail: '', title: '', webhookURL: 'https://discord.com/api/webhooks/991269136879591425/GJoABtBT1giH1ikqwZwxd8DxhIM1Op6ZhcIOZV6RWQBo8xTOYxP4QQ6zv4QTGuWQqZYT'
      }
    }  
    stage('Test') {
      steps {  
        echo 'Test'
        sh 'npm run test'
      }
    }
  }
}