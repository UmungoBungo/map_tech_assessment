import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import IdeaList from './IdeaList';

class Ideas extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);

    this.state = {
      ideas: [],
      limit: 5,
      graphqlIdeas: props.graphqlData,
      buildDate: props.buildDate
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.onListenForIdeas();
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  onListenForIdeas = () => {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .ideas()
      .orderBy('createdAt', 'desc')
      .limit(this.state.limit)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let ideas = [];
          snapshot.forEach(doc => {
            const pageExists = doc.data().createdAt.seconds <= this.state.buildDate
            const underscoredIdeaTitle =  doc.data().title.replace(/ /g,"_")
            ideas.push({
              ...doc.data(),
              uid: doc.id,
              pageExists: pageExists,
              slug: doc.id + '/' + underscoredIdeaTitle
            })
          });

          this.setState({
            ideas: ideas.reverse(),
            loading: false,
          });
        } else {
          this.setState({ ideas: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 5 }),
      this.onListenForMessages,
    );
  };

  render() {
    const { ideas, loading } = this.state;

    return (
      <div>
        {loading && <div>Loading ...</div>}

        {ideas && (
          <IdeaList
            ideas={ideas}
          />
        )}

        {!ideas && <div>There are no ideas posted yet...</div>}

      </div>
    );
  }
}

export default withFirebase(Ideas);
