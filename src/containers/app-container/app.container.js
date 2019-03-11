import React from "react";
import { connect } from "react-redux";
import * as kanyeQuoteActions from "../../store/kanye-quote/actions";
import LoadingSpinner from "../../components/loading-spinner";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";
import "./app.container.css";

const BUTTON_TEXT = "Another one";

class AppContainer extends React.Component {
  getKanyeQuote() {
    const { kanyeQuoteRequest } = this.props;
    kanyeQuoteRequest();
  }
  componentDidMount() {
    this.getKanyeQuote();
  }
  render() {
    const { isLoading, isError, quote } = this.props;
    return (
      <div className="app-container-wrapper">
        {isLoading && !isError && !quote && <LoadingSpinner />}
        {!isLoading && isError && !quote && (
          <span>Oh noes there was an error!</span>
        )}
        {!isLoading && !isError && (
          <div className="app-container-content">
            <span className="app-container-quote">{quote}</span>
            <Button onClick={() => this.getKanyeQuote()}>{BUTTON_TEXT}</Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quote: state.quote,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = dispatch => ({
  kanyeQuoteRequest: () => {
    dispatch(kanyeQuoteActions.kanyeQuoteRequest());
  }
});

export {
  AppContainer as AppContainerComponent,
  mapStateToProps,
  mapDispatchToProps
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
