import React ,{useState}from 'react'
import Posts from  './components/BlogPosts/Posts'
import Post from './components/BlogPosts/Post'
import CreatePost from './components/BlogPosts/CreatePost'
import{ Router} from "@reach/router"
import { Menu } from 'antd';
import UpdatePost from './components/BlogPosts/UpdatePost';
import SignUp from './components/BlogPosts/SignUp';
import SignIn from './components/BlogPosts/SignIn';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {auth} from '../firebase'
import AppNav from './components/BlogPosts/AppNav.jsx'
const {SubMenu} = Menu;
function App(props){
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
    return (
        <div className="app_container">

            <AppNav user={user}/>
            <Router>
                <SignUp path="sign_up"/>
                <SignIn path="sign_in" default/>
                <Posts path="blogs/:uid/posts" user ={user}/>
                <CreatePost path="create_post" user ={user}/>
                <Post path="blogs/:uid/post/:id" user ={user} />
                <UpdatePost path="update_post/:id" user ={user}/>

            </Router>

        </div>
    )

}
export default App;