import React, { Component } from 'react';
import { View, FlatList, Dimensions,} from 'react-native';

// styles
import Styles from './styles';

// variables
const { width } = Dimensions.get('window');

export default class FlatGridList extends Component {
  renderItem({ item, index }) {
    const { numColumns, renderItem } = this.props;
    const height = width / numColumns;

    if (item.empty) {
      return <View style={[Styles.item, Styles.itemInvisible]} />;
    }

    return renderItem({ item, index }, {
      ...Styles.item,
      height
    });
  }

  formatRow() {
    const { data, numColumns } = this.props;
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  }

  render() {
    const { numColumns } = this.props;

    return (
      <FlatList
        data={this.formatRow()}
        style={Styles.container}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns} />
    );
  }
}