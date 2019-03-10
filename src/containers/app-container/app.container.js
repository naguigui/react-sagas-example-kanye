import React from "react";
import { connect } from "react-redux";
import * as kanyeQuoteActions from "../../store/kanye-quote/actions";

class AppContainer extends React.Component {
  componentDidMount() {
    const { kanyeQuoteRequest } = this.props;
    kanyeQuoteRequest();
    // const response = await fetch("https://api.kanye.rest");
    // const data = await response.json();
    // console.log(data);
  }
  render() {
    return (
      <div>
        <span>Hello World</span>
      </div>
    );
  }
}

const mapStateToProps = /* istanbul ignore next */ state => ({});

const mapDispatchToProps = /* istanbul ignore next */ dispatch => ({
  kanyeQuoteRequest: () => {
    dispatch(kanyeQuoteActions.kanyeQuoteRequest());
  }
});

export { mapStateToProps, mapDispatchToProps };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
