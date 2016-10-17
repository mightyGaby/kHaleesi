(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _appContainer = require('./appContainer.js');

var _appContainer2 = _interopRequireDefault(_appContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_appContainer2.default, null), document.getElementById('app-container'));

},{"./appContainer.js":2,"jquery":"jquery","react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppContainer = function (_React$Component) {
    _inherits(AppContainer, _React$Component);

    function AppContainer() {
        _classCallCheck(this, AppContainer);

        var _this = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this));

        _this.state = { filters: [] };
        return _this;
    }

    _createClass(AppContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // $.ajax({
            //     url: 'https://cdn.contentful.com/spaces/48ovsamdb5b7/content_types/cocktail?access_token=97a3e5fd0c474170c569bfc33003efe2aa65bc55a5b7ffc4eb48b7c26bff75c2',
            //     dataType: 'json',
            //     success: function(filterList) {
            //         this.setState({
            //             filters: filterList.fields[1].items.validations[0].in
            //         });
            //     }.bind(this)
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            //return <FilterList filters={this.state.filters} />;
        }
    }]);

    return AppContainer;
}(_react2.default.Component);

exports.default = AppContainer;

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2FwcENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFTLE1BQVQsQ0FBZ0IsMkRBQWhCLEVBQWtDLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFsQzs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7O0lBRXFCLFk7OztBQUNqQiw0QkFBYztBQUFBOztBQUFBOztBQUdWLGNBQUssS0FBTCxHQUFhLEVBQUUsU0FBUyxFQUFYLEVBQWI7QUFIVTtBQUliOzs7OzRDQUVtQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O2lDQUVRO0FBQ0w7QUFDSDs7OztFQXJCcUMsZ0JBQU0sUzs7a0JBQTNCLFkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi9hcHBDb250YWluZXIuanMnXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwQ29udGFpbmVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWNvbnRhaW5lcicpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZmlsdGVyczogW10gfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyAkLmFqYXgoe1xuICAgICAgICAvLyAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uY29udGVudGZ1bC5jb20vc3BhY2VzLzQ4b3ZzYW1kYjViNy9jb250ZW50X3R5cGVzL2NvY2t0YWlsP2FjY2Vzc190b2tlbj05N2EzZTVmZDBjNDc0MTcwYzU2OWJmYzMzMDAzZWZlMmFhNjViYzU1YTViN2ZmYzRlYjQ4YjdjMjZiZmY3NWMyJyxcbiAgICAgICAgLy8gICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihmaWx0ZXJMaXN0KSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZpbHRlcnM6IGZpbHRlckxpc3QuZmllbGRzWzFdLml0ZW1zLnZhbGlkYXRpb25zWzBdLmluXG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL3JldHVybiA8RmlsdGVyTGlzdCBmaWx0ZXJzPXt0aGlzLnN0YXRlLmZpbHRlcnN9IC8+O1xuICAgIH1cbn0iXX0=
