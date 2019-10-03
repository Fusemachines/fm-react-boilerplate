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
          <div className="logo">
            <h1>React + Typescript + Redux</h1>
          </div>
          <p className={'default-intro'}>
            This is a bolier plate for react with typescript and redux. Managed and update by Fusemachines Frontend
            Teams.
          </p>

          <button className={'default-btn'} onClick={this.props.fetchDogBreed}>
            Click me!
          </button>

          <div className="dog-list">
            {this.props.dogs
              ? this.props.dogs.list.map(dog => {
                  return (
                    <div className="dog-list-item" key={dog.id}>
                      <span className="dog-list-item-title">{dog.name}</span>
                      <span className="dog-list-item-desc">{dog.bred_for || '-'}</span>
                    </div>
                  );
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
