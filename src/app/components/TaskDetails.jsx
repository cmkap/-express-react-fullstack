import React from 'react';
import { connect } from 'react-redux';

const TaskDetail = ({
    id,
    comments,
    task,
    isComplete
}) => (
    <div>
        TaskDetail
    </div>
)

const mapStateToProps = state => state;

export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);