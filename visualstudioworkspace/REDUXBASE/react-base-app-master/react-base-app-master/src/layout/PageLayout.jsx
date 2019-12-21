import React from 'react';
import styles from '../appStyless.css';
import cx from 'classnames';

class PageLayout extends React.Component {

    render(){
        return (
            <div>
                <MyHeader></MyHeader>
                <MyContent></MyContent>
                <MyFooter></MyFooter>
            </div>
        );
    }
}

class MyHeader extends React.Component{
    
    render(){
      /* var mystyle = {
           backgroundColor:'grey',
           height:50
       }*/

//var h12  = cx(`${styles.headerAndFooter}`);

var h12  = cx({[`${styles.headerAndFooter}`]:true});

      return (
        <div className={h12}>
          Header
        </div>
      );
    }
}



class MyContent extends React.Component{
    
    render(){
       /* var mystyle = {
           backgroundColor:'red',
           height:500
       }*/

        return(
            <div className={styles.container}> 
                Content
            </div>    

        );
    }
}

class MyFooter extends React.Component {

    render(){

        /*var mystyle = {
           backgroundColor:'black',
           height:200
       }*/

        return(
            <div className={styles.headerAndFooter}> Footer </div>
        );
    }
}

export default PageLayout;