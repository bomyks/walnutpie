// JSX를 사용하려면 React를 import 해주어야 함
// JSX : XML 형태의 코드를 Javascript로 변환. JSX 문법으로 작성하면 React.createElement를 사용하는 Javascript 형태로 변환시켜줌
// import를 사용해 다른 파일을 불러오는 것은 webpack 덕분
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class 형태로 컴포넌트 생성
// 이 방법 말고도 함수로 컴포넌트 생성하는 방법도 있음
class App extends Component {
	render() {
		return (
			// 모든 Component는 하나의 element로 감싸져있어야 함
			// 보통 하나의 div로 감싸는데 스타일 지정 등의 문제가 생기는 것을 방지하기 위해 <Fragment>로 감쌀 수 있음(v16.2 도입)

			// JSX를 사용하는 모든 태그는 닫혀있어야 함
			// <input> [X]
			// <input/> [O]
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

// 현재 컴포넌트를 다른 곳에서 불러와 사용할 수 있게 export
export default App;
