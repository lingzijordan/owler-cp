import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
// import Suggestions from './Suggestions';

const keyCodes = {
  ENTER: 13,
  ESCAPE: 27,
  UP: 38,
  DOWN: 40,
};

class SearchBar extends React.Component {
  static initialState = {
    highlightedItem: -1,
    searchTerm: '',
    suggestions: [],
    value: '',
    selectedObj: null,
  }
  state = { ...this.initialState };

  componentDidMount() {
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState({ value: nextProps.defaultValue });
    }
  }
  onSearch = (e) => {
    e.preventDefault();
    this.search();
  }
  onSelection = (suggestion, selectedObj) =>
      this.setState({
        value: suggestion,
        selectedObj,
      }, () => this.search()
    );
  onKeyDown = (e) => {
    const key = e.which || e.keyCode;
    switch (key) {
      case keyCodes.UP:
      case keyCodes.DOWN:
        e.preventDefault();
        this.scroll(key);
        break;
      case keyCodes.ENTER:
        this.search();
        break;
      case keyCodes.ESCAPE:
        this.input.blur();
        break;
      default:
        this.input.blur();
        break;
    }
  }
  onChange = (e) => {
    clearTimeout(this.timer);
    const input = e.target.value;
    if (!input) {
      this.setState(this.initialState);
    } else {
      this.setState({
        value: input,
        selectedObj: null,
      }, () => {
        this.timer = setTimeout(() => this.autosuggest(), this.props.delay);
      });
    }
  }
  normalizeInput = () => this.state.value.toLowerCase().trim();
  autosuggest = () => {
    const searchTerm = this.normalizeInput();
    if (!searchTerm) return;
    new Promise((resolve) => {
      this.props.onChange(searchTerm, resolve);
    }).then((suggestions) => {
      if (!this.state.value) return;
      this.setState({
        highlightedItem: -1,
        searchTerm,
        suggestions,
      });
    });
  }
  scroll = (key) => {
    const { highlightedItem: item, suggestions } = this.state;
    const lastItem = suggestions.length - 1;
    let nextItem;

    if (key === keyCodes.UP) {
      nextItem = (item <= 0) ? lastItem : item - 1;
    } else {
      nextItem = (item === lastItem) ? 0 : item + 1;
    }

    this.setState({
      highlightedItem: nextItem,
      value: suggestions[nextItem].label,
      selectedObj: suggestions[nextItem],
    });
  }
  search = () => {
    if (!this.state.value) return;
    const value = this.normalizeInput();
    if (!this.state.selectedObj) {
      this.state.selectedObj = { label: value };
    }
    clearTimeout(this.timer);
    this.input.blur();
    const { highlightedItem, suggestions } = this.initialState;
    this.setState({ highlightedItem, suggestions, value: this.state.selectedObj.label });
    this.props.onSearch(this.state.selectedObj);
  }
  render() {
    const {
      inputName,
      placeholder,
    } = this.props;
    const {
      isFocused,
      suggestions,
      value,
      // searchTerm,
      // highlightedItem,
    } = this.state;
    return (
      <div className="search-bar-wrapper">
        <div
          className={classNames(
          'search-bar-field',
          { 'is-focused': isFocused },
          // { 'has-suggestions': suggestions.length > 0 }
        )}
        >
          <Input
            className="search-bar-input"
            id="search-bar-input"
            name={inputName}
            type="text"
            maxLength="100"
            ref={(c) => { this.input = c; }}
            value={value}
            placeholder={placeholder}
            onChange={this.onChange}
            onBlur={() => this.setState({ isFocused: false, suggestions: [] })}
            onKeyDown={suggestions && this.onKeyDown}
            onFocus={() => this.setState({ isFocused: true })}
          />
        </div>
        {/* { suggestions.length > 0 &&
          <Suggestions
            searchTerm={searchTerm}
            suggestions={suggestions}
            highlightedItem={highlightedItem}
            onSelection={this.onSelection}
          /> } */}
      </div>
    );
  }
}

SearchBar.propTypes = {
  delay: PropTypes.number,
  inputName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

SearchBar.defaultProps = {
  delay: 200,
};

export default SearchBar;
