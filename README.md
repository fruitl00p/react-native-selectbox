# react-native-selectbox
This is a platform independant (Android / iOS) version of the native picker / selectbox that react-native has. It's basically the
Android version and the iOS version merged into one: only show a single selected label and only after clicking on this show the full list of items.

This is a derivation of the [react-native-modal-picker by d-a-n](https://github.com/d-a-n/react-native-modal-picker) I've simplified this a bit and removed alot
of state handling preferring outside control. This allows for Redux state handling. I've also added the option of having the react-native-picker `prompt` feature.
The prompt is a simple text above the list inside the modal.

## Install

```sh
npm i react-native-selectbox --save
```

## Usage

You can either use this component as an wrapper around your existing component or use it in its default mode. In default mode a customizable button is rendered.

See `SampleApp` for an example how to use this component.

```jsx

import Selectbox from 'react-native-selectbox'

[..]

class App extends React.Component {

    ...

    _onChange = (item) => {
        // the full item as defined in the list of items is passed to the onChange handler to give full
        // flexibility on what to do... 
    }

    render() {
        const items = [
            { key: 0, label: 'Fruits', value:'some value' },
            { key: 1, label: 'Fruits', value:{this: "could", be:"anything"} },
        ];

        return (
            <View>
                <Selectbox
                    selectedItem=this.props.selectedItem
                    onChange={this._onChange}
                    items=items />
            </View>
        );
    }
}
```

## Props

* `items - []` required, array of objects with a unique key and label
* `selectedItem - object` required, the selected Item to be rendered directly
* `promptLabel - object` optional, a string which will appear above the list of options / picker
* `cancelLabel - object` optional, a string to be shown on the modal (defaults: `cancel`)
* `onChange - function` optional, callback function, when the user selects an item
* `animationType - function` optional, a string for the animation used to show the modal (defaults: `slide`)
* `transparent - function` optional, a boolean value for the transparency of the modal
* `style - object` optional, style definitions for the root element
* `optionLabelStyle - string` optional, style definitions for each element from the options
* `selectLabelStyle - object` optional, style definitions for currently selected item
