pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('npm install') {
            steps { 
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                sh 'npm install'
                }
            }
        }
        stage('unit test') {
            steps { 
                sh 'ng test'
            }
        }
    }
}
