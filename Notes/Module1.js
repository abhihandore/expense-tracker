// React State and Working with Events

/**
 * Call events always with name starts with on___
 * For e.g.,
 * <button onClick={functionName}></button> 
 * 
 * !Hooks should be get called directly in the components, not in nested function , not outside the component.
 * [But There are some exceptions.]
 * 
 * *useState always returns an array with exactly two elements, first element is an current state value and second element is an function to update that.
 * Its an per component instance based. i.e, Every time when component called , they have there own states. They'll never impact other states being called.
 * 
 * *const [title, setTitle] = useState(props.title) 
 * *in the above exmple, when react initialize the component, it memorize changes of the state or when we initialized the state. so that, on the second time onWards, it will never initialized the state when setTItle function called. It just update the state value.
 * 
 *  
 * *When depending on previous state, i'm updating the current state , we should allow the following approach :
 * 
 * setUserInput( (prevState) => {
 *      return {...prevState, event.target.value}
 * })
 * 
 */
