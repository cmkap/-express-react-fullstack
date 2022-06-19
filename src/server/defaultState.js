export const defaultState = {
  users:[{
    id:"U1",
    name:"Dev"
  },{
    id:"U2",
    name:"C. Eeyo"
  }],
  groups:[{
    name:"To Do",
    id:"G1",
    owner:"U1"
  },{
    name:"Done",
    id:"G2",
    owner:"U21"
  }],
  tasks:[{
    name:"Do tests",
    id:"T1",
    group:"G1",
    owner:"U1",
    isComplete:false
  },{
    name:"Refactor",
    id:"T1",
    group:"G1",
    owner:"U1",
    isComplete:false
  },{
    name:"Do tests",
    id:"T2",
    group:"G2",
    owner:"U2",
    isComplete:true
  }],
  comments:[{
    owner:"U1",
    id:"C1",
    taske:"T1",
    content:"Great work!!!"
  }]
}