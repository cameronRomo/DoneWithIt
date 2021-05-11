# [UI Widgets](https://reactnative.dev/docs/components-and-apis)

#### Views:

- Similar to div
- Good for styling
- SafeAreaView - used for the notch on new ios devices

#### Text:

- has 'numberOfLines' attribute
- accepts onPress function

#### Image:

- Can use self-closing syntax
- 'source' attribute e.g.`source={require('./assets/icon.png')}`
- Should use static images for performance
- Gives a number to reference the image
- Hitting an endpoint for an image:

    `source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300" }}`

#### Touchables:

Cross platform:
- TouchableWithoutFeedback
  - no visual feedback
  - onPress, onLongPress
- TouchableOpacity
  - Feedback to the user
- TouchableHighlight
  - Darkens background

Android: 
- TouchableNativeFeedback
  - Ripple effect

#### Buttons:

- Styles render differently for buttons depending on the platform

# [APIs](https://reactnative.dev/docs/accessibilityinfo)

#### Alerts: 

- Shows differently depending on platform
- *Object* 
  - Make customizable by adding arguments


#### StyleSheet:

- Uses standard `JS` object
- `.create()` helps to evaluate the properties to make sure it's valid
- Standard practice for React Native
- can pass style attribute an array of different styles 
    - i.e. `style={[styles.container, containerStyle]}`
- Usually conventional to have StyleSheet below component 

#### Platform-specific Code:

- import Platform from React-Native
- Platform.OS/Version,isPad (various properties)
  - Can use to check if the platform is 'android'
  