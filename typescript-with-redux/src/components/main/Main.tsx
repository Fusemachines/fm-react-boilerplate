import React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ReduxState } from '../../store/rootReducer';
import { fetchDogBreed } from '../../store/example/actions';
import { DogState } from '../../store/example/types';

interface MainProps extends RouteComponentProps {
  fetchDogBreed: any;
  dogs: DogState;
}
/**
 * Describe a Component here.
 */
export class Main extends React.Component<MainProps> {
  render() {
    return (
      <div className="default-wrapper">
        <div className="default-paragraph">
          <div className="logo" style={{ width: "100%" }}></div>
          <p>This is a bolier plate for react with typescript and redux.
            Managed and update by Fusemachines Frontend Teams.</p>

          <button onClick={this.props.fetchDogBreed}>Click me, Click me!</button>

          <div className="dog-list">
            {this.props.dogs
              ? this.props.dogs.list.map(dog => {
                return <p key={dog.id}>{dog.name}</p>;
              })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  dogs: state.dogs
});

export default connect(
  mapStateToProps,
  { fetchDogBreed }
)(Main);
