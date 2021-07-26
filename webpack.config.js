const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // development, production, none
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: './src/index',
  //웹팩이 모듈을 처리하는 방식을 설정하는 속성. -> 확장자를 생략해도 인식하게 만든다.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  //모듈에 적용할 로더들과 옵션의 설정
  //test : 어떤 파일에 적용할지 확장자를 작성
  //exclude : 로더에서 제외할 파일 설정
  // loader : 적용할 로더 작성, 여러개일 경우 use 키워드 사용
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js 적용, dist에 새로운 html 생성
      template: `./public/index.html`,
    }),
  ],
  // source-map을 설정하는 부분으로 에러가 발생했을 때 번들링된 파일에서 어느 부분에 에러가 났는지를 쉽게 확인할 수 있게 해주는 도구
  devServer: {
    port: 8080,
    //해당 경로의 파일이 변할때 리로딩하도록 설정
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    overlay: true,
    //모듈의 변화만 자동으로 로드하는 Hot Module Replacement 기능 활성화
    hot: true,
    //메모리 뿐만 아니라 파일도 만들것인지 설정'
    // writeToDisk: true,
    //프록시 설정 : 서버에 요청시 localhost가 아닌, korello.app에서 요청한걸로 인식하도록!
    proxy: {
      '/api': {
        target: 'korello.app',
        changeOrigin: true,
      },
    },
  },
};
