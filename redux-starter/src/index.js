import configureStore from './store/configureStore';
import { 
   bugAdded,
   bugResolved, 
   bugAssignedToUser,
   getUnresolvedBugs,
   getBugsByUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';
import { loadBugs, assignBugToUser } from './store/bugs';


const store = configureStore()

store.subscribe(()=>{
  console.log("Store changed")
})


store.dispatch(loadBugs())


setTimeout(()=> store.dispatch(assignBugToUser(1, 4)), 2000);

// store.dispatch(userAdded({ name: 'user 1' }))
// store.dispatch(userAdded({ name: 'user 2' }))
// store.dispatch(projectAdded({ name: 'project1'}))
// store.dispatch(bugAdded({ description: 'bug1' }))
// store.dispatch(bugAdded({ description: 'bug2' }))
// store.dispatch(bugAdded({ description: 'bug3' }))
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))
// store.dispatch(bugResolved({ id: 1 }))

