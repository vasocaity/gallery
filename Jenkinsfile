pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('npm install') {
            steps { 
                sh '/usr/local/bin/npm install'
            }
        }
        stage('unit test') {
            steps { 
                sh 'ng test'
            }
        }
    }
}
