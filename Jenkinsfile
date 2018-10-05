// Declarative Pipeline
pipeline {
    agent none
    stages {
        stage ('pull code - linux') {
            steps {
                build   job: 'gallery-web'
            }
        }

    }
}
