import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        searchResults: [],
        playlistName: 'myPlaylist',
        playlistTracks: []
      }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    addTrack(track) {
      if (this.state.playlistTracks.find(savedTrack => 
        savedTrack.id === track.id
      )) {
        return ;
      } else {
          this.state.playlistTracks.push(track);
      }
    }

    removeTrack(track) {
      this.state.playlistTracks.pop(track.id);
    }

    updatePlaylistName(name) {
      this.setState({
        playlistName: name
      })
    }

    render() {
        return (
          <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              {/* <!-- Add a SearchBar component --> */}
              <div class="App-playlist">
                <SearchResults searchResults={this.state.searchResults}
                  onAdd={this.addTrack} />
                <Playlist playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onNameChange={this.updatePlaylistName}
                  onRemove={this.removeTrack} />
              </div>
            </div>
          </div>
        );
    }
}

export default App;
