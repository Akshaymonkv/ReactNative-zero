import React,{Component} from "react" //importing react components
import{
      View,      //importing the view component from react library
      StyleSheet
}from "react-native"

/*inorder to start using these components we need some components 
   a class component can be used using the below syntax.
   Here the 'App' is the class name used and Component is the one we imported in the first statement
   and hence Component acts as a super class from which our class 'App' a child class derives the parents's features
*/

export default class App extends Component{
  //render is the function we use to render all the designs we build using react native to render and display in our device
  render(){
  
    return(
       //designing a view using an inline css style to design the same

      /*<View style={{height:'100%',width:'100%',backgroundColor: 'black'}}>

      </View>*/
      <View style={styles.container}>

      </View>

    )
  }

}

/*Other than using an inline css we can use a css object ti style the view this is the most standard
way of styling and for that we create an object using the below syntax
*/
//Also need to import the StyleSheet from react
const styles = StyleSheet.create(
  {
    //we are using a container to define all the styles to be used for the created view 
   container:
    {
    height:'100%',
    width:'100%',
    backgroundColor: 'black'
    }
  }
)

