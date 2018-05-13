import React, {Component} from 'react';

class Header extends Component{
    // state = {
    //     testText : "class filed로 state 지정"
    // }
    
    constructor(props){
        // Component를 만들면서 Component를 상속
        // constructor를 작성하면 기존의 class 생성자를 덮어쓰기 때문에 원래 Component가 지니고 있던 생성자를 super를 통해 미리 실행하고, 작업(state 설정)하는 것
        // class fileds가 constructor보다 먼저 실행됨
        super(props);
    }

    render(){
        return(
            <div className={"header_container"}>
                <h1>
                    <img src={NodeRequire("../img/header/logo.png")} alt=""/>
                </h1>
                <div></div>
                <div></div>
            </div>
        )
    }
}