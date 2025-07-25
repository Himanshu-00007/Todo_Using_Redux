import { useState } from 'react'

/* ════════════════════════════════════════════════════════════════ */
/* 🧠 REDUX — STATE MANAGEMENT FOR REACT APPLICATIONS              */
/* ════════════════════════════════════════════════════════════════ */

/* Redux is a state management library for JavaScript applications.
   When your app grows, passing state through props (called “prop drilling”)
   becomes messy and hard to manage.
   ✅ Redux solves this by storing all your state in one global store,
   making state easier to manage, debug, and test. */


/* 🚀 Redux Toolkit — The Modern Way to Write Redux Logic
   Redux Toolkit is the official, recommended way to write Redux logic.
   It simplifies Redux by reducing boilerplate code,
   making it easier to set up, use, and scale. */


/* ════════════════════════════════════════════════════════════════ */
/* 🧩 CORE CONCEPTS OF REDUX                                        */
/* ════════════════════════════════════════════════════════════════ */

/* 🔹 State:
   A plain JavaScript object that stores the entire application’s data.
*/

/* 🔹 Action:
   An object that describes what happened in your application.
   (i.e., What you want to do).
*/

/* 🔹 Reducer:
   A pure function that takes the current state and an action,
   then returns the new updated state.
*/


/* ════════════════════════════════════════════════════════════════ */
/* ⚛️ REACT-REDUX HOOKS                                             */
/* ════════════════════════════════════════════════════════════════ */

/* 🔸 useDispatch:
   A hook used to send actions to the Redux store to update the state.
*/

/* 🔸 useSelector:
   A hook used to select (read) a piece of state from the Redux store in a component.
*/


/* ════════════════════════════════════════════════════════════════ */
/* 📘 PURE vs IMPURE FUNCTIONS                                     */
/* ════════════════════════════════════════════════════════════════ */

/* ✅ Pure Function:
   1) Always returns the same output for the same input.
   2) Does not change anything outside (no side effects).
*/

/* ❌ Impure Function:
   1) May return different results even for the same inputs.
   2) Has side effects — like modifying global variables, API calls,
      DOM changes, logging, etc.
*/




import './App.css'
import TodoForm from './components/TodoForm'

function App() {
  

  return (
    <>
      
      <TodoForm/>
    </>
  )
}

export default App
