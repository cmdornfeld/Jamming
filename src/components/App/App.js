import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';


class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        searchResults: [],
        playlistName: 'New Playlist',
        playlistTracks: []
      }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    addTrack(track) {
      if (this.state.playlistTracks.find(savedTrack => 
        savedTrack.id === track.id
      )) {
        return ;
      } else {
          this.state.playlistTracks.push(track);
          this.setState({
            playlistTracks: this.state.playlistTracks
          });
      }
    }

    removeTrack(track) {
      this.state.playlistTracks.filter(currentTrack => {
        return currentTrack.id !== track.id
      });

      this.setState({
        playlistName: this.state.playlistTracks
      })
    }

    savePlaylist() {
      this.state.playlistTracks.map(track => {
        return (
          track.trackURIs
        )
      })
    }

    search(term) {
      Spotify.search(term).then(result => {
        this.setState({
          searchResults: result
        })
      });
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
              <SearchBar onSearch={this.search} />
              <div class="App-playlist">
                <SearchResults 
                  searchResults={this.state.searchResults}
                  onAdd={this.addTrack} />
                <Playlist 
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onNameChange={this.updatePlaylistName}
                  onRemove={this.removeTrack}
                  onSave={this.savePlaylist} />
              </div>
            </div>
          </div>
        );
    }
}

export default App;
