import React from "react";
import { connect } from "react-redux";
import * as kanyeQuoteActions from "../../store/kanye-quote/actions";
import LoadingSpinner from "../../components/loading-spinner";

class AppContainer extends React.Component {
  componentDidMount() {
    const { kanyeQuoteRequest } = this.props;
    kanyeQuoteRequest();
  }
  render() {
    const { isLoading, isError, quote } = this.props;
    return (
      <div>
        {isLoading && !isError && !quote && <LoadingSpinner />}
        {!isLoading && !isError && <span>{quote}</span>}
      </div>
    );
  }
}

const mapStateToProps = /* istanbul ignore next */ state => ({
  quote: state.quote,
  isLoading: state.isLoading,
  isError: state.isError
});

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
