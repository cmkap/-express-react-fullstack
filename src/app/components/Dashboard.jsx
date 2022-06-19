import React from 'react';
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'

export const Dashboard = ({groups}) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map(group =>(
        <ConnectedTaskList id={group.id} name={group.name}/>
    ))}
  </div>  
) // not curly brackets to suggest it is not a function but an object to be returned

function mapStateToProps(state){
    return {
        groups:state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

//In react when wanting to work with repeating elemnts like this groups USE a map!!!
