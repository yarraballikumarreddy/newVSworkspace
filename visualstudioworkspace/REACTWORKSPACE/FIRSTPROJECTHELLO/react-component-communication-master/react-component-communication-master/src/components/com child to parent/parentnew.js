import ChildNew from './childnew'
 export default class ParentNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Default parent state"}; 
        /*
         Bind our childHandler function to this context
         that will get called from our Child component
        */
        this.childHandler = this.childHandler.bind(this) }
    /* Function that gets called when
     we bubble up our `return` from Child */
    childHandler(dataFromChild) {
        // log our state before and after we updated it
        console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            data: dataFromChild
        },() => console.log('Updated Parent State:', this.state));
    }
    render() {
        /* Set our childHandler function as a value to a prop that gets passed down to our Child component */
        return <ChildNew action={this.childHandler} />
    }
}