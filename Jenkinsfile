// Declarative Pipeline
pipeline {
    agent none
    stages {
        stage ('pull code') {
            steps {
                build   job: 'gallery-web'
            }
        }
        stage ('unit test') {
            steps {
                build   job: 'gallery-web-test'
            }
        }
    }
}
