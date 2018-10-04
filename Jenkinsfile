pipeline {
    agent any
    stages {
        stage('npm install') {
            steps { 
                sh 'npm install'
            }
        }
        stage('unit test') {
            steps { 
                sh 'ng test'
            }
        }
    }
}
