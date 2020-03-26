/**
 * @prettier
 * @flow
 * */

import React from 'react';
import {Picker} from 'react-native';

type Props = {
  data: Array<string>,
  selectedItem?: number,
  onItemSelected?: number => void,
  colorIOS?: String,
};

type State = {
  selectedItem: number,
};

export default class WheelPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedItem: props.selectedItem,
      colorIOS: props.colorIOS,
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.selectedItem !== this.props.selectedItem) {
      this.setState({selectedItem: this.props.selectedItem});
    }
  }

  onItemSelected = (value: any, index: number) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(index);
    }
    this.setState({selectedItem: index});
  };

  render() {
    const data = this.props.data;
    if (!data || !data.length < 0) return null;
    return (
      <Picker
        style={{
          width: 200,
        }}
        {...this.props}
        selectedValue={data[this.state.selectedItem]}
        onValueChange={this.onItemSelected}>
        {this.props.data.map((i, index) => (
          <Picker.Item
            key={index}
            label={i}
            value={i}
            color={this.state.colorIOS}
          />
        ))}
      </Picker>
    );
  }
}
