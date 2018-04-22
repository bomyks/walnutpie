import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// style import
import './index.css';
// component import
import App from './App';

// ReactDOM.render(param1,param2) : 브라우저 상에 React Component를 보여주기 위한 함수
// param1 : 렌더링 할 결과물
// param2 : Component를 어떤 DOM에 그릴지 정해줌
ReactDOM.render(<App />, document.getElementById('root')); // Id가 root 인 DOM을 찾아 App Component를 렌더링
registerServiceWorker();
