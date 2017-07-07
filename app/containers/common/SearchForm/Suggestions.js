import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Suggestions extends React.Component {
  state = {
    activeItem: -1,
  }
  onTouchStart = (index) => {
    this.timer = setTimeout(() => {
      this.setState({ activeItem: index });
    }, 200);
  }
  onTouchMove = () => {
    clearTimeout(this.timer);
    this.touchedMoved = true;
    this.setState({ activeItem: -1 });
  }
  onTouchEnd = (suggestion, selectedObj) => {
    if (!this.touchedMoved) {
      setTimeout(() => {
        this.props.onSelection(suggestion, selectedObj);
      }, 220);
    }
    this.touchedMoved = false;
  }
  render() {
    const {
      highlightedItem,
      suggestions: _suggestions,
    } = this.props;
    const suggestions = _suggestions.map((x) => x.label);
    const { activeItem } = this.state;
    return (
      <ul
        className="search-bar-suggestions"
        style={{ marginLeft: `-${document.getElementById('seach-bar-select').offsetWidth}px` }}
        onMouseLeave={() => this.setState({ activeItem: -1 })}
      >
        {suggestions.map((suggestion, index) =>
          <li
            className={classNames('suggestion-item', {
              highlighted: highlightedItem === index || activeItem === index,
            })}
            key={index}
            role="menuitem"
            onClick={() => this.props.onSelection(suggestion, _suggestions[index])}
            onMouseOver={() => this.setState({ activeItem: index })}
            onFocus={() => this.setState({ activeItem: index })}
            // onMouseDown={(e) => e.preventDefault()}
            // onTouchStart={() => this.onTouchStart(index)}
            // onTouchMove={() => this.onTouchMove()}
            // onTouchEnd={() => this.onTouchEnd(suggestion, _suggestions[index])}
          >
            <div>
              {/* {isIsbn ? <span>{suggestion} <span className="isbn-block"> ISBN: {_suggestions.find(x => x.label === suggestion).isbn}</span></span> : suggestion} */}
            </div>
          </li>
        )}
      </ul>
    );
  }
}

Suggestions.propTypes = {
  highlightedItem: PropTypes.number,
  // searchTerm: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default Suggestions;
