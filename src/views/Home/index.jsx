import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../redux/action/user'; 
import './style.scss';
import {Input,Button} from 'antd';
@connect(
  state=>({user:state.user}),
  dispatch=>bindActionCreators(actions,dispatch)
)
class Home extends React.PureComponent{
  changeLanguage=()=>{
    const {changeLanguage}=this.props;
    changeLanguage('en');
  }
  render(){
    const {user}=this.props;
    return(
      <div className="hello">
        <Input placeholder="Basic usage" />
        <img src={logo}/>
        <p>{user.language}</p>
        <Button type="primary"  onClick={this.changeLanguage}>点击切换语言</Button>
      </div>
    )
  }
}
export default Home;