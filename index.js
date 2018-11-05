//我是本地的test分支
const redux = require('redux')
const createStore = redux.createStore
// 首先我们需要创建一个reducer来处理state
// 注意 reducer一定是一个纯函数
/**
 *
 * @param {接受的state} state
 * @param {传入的action} action
 */
const initState = {
  myState: ['我是初始的state']
}
function myReducer(state = initState, action) {
  switch (action.type) {
    case 'changeState':
      // redux中一定要返回一个新的出去state，不可以改变原来的state
      return {
        ...state,
        myState: action.myState
      }
    default:
      return state
  }
}
// 将reducer放进createStore里 生成一个唯一的store
const store = createStore(myReducer)
// 通过store的getState方法我们可以看到store里的state
console.log('初始的state', store.getState())

//第二步我们通过创建一个action来让redux dispatch 这个action 去调用reducer
// action单纯的返回一个必须包含type属性的对象   like:{type:'changeState'}
function myAction() {
  return {
    type: 'changeState',
    myState: ['我是改边的state']
  }
}
// 第三步 我们调用dispath 来更改state
store.dispatch(myAction())
console.log('我是改变之后的state', store.getState())
