node {
    env.NODEJS_HOME = "${tool 'Node 6.x'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    sh 'npm --version'
    sh 'npm install -g yarn'
    sh 'yarn install'
    sh 'yarn test'
}
