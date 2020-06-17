import React,{useState} from 'react';
import{ Link} from "@reach/router"
import { Menu,Icon } from 'antd';
import {auth} from '../firebase'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const AppNav=(props)=>{
    const [user,setUser]=useState(false)
    auth.onAuthStateChanged(function(user){
        if(user){
            setUser(user)
        }else{
            console.log('no user signed in')
        }
    });
    const onSignOut=()=>{
        console.log('signing out')
        auth.signOut().then(function() {

            console.log('user signed out')
            setUser(false)
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
        return(
            <div className="app_main_navigation">
            <Menu mode="horizontal">
        <Menu.Item key="posts" icon={<MailOutlined />}>
          <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}>Posts</Link>
        </Menu.Item>
        
        {props.user &&
            <Menu.Item key="create_post"  icon={<AppstoreOutlined />}>
            <Link to="/create_post" style={{ float:'right'}}>Create Posts</Link>
            </Menu.Item>
        }
        {!props.user
            ?
                <Link to="/sign_in" style={{float: 'right'}}> Sign In</Link>
            :
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={onSignOut} style={{ float:'right'}}>Sign Out</a>
        }
        </Menu>
        </div>
        )
}
export default AppNav;