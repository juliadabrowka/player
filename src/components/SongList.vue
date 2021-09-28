<template>
  <div class="main-container" v-if="!isPlayerVisible">
      <div class="playlist-title">
          <font-awesome-icon icon='reply' :style="{ padding: '15px', color: 'purple', backgroundColor: 'white', borderRadius: '50%' }" @click="showPlayer" />
          <p>Playlist</p>
      </div>
    <div class="all-playlist-content">
      <div class="song-bar" v-for="(song, songIndex) in songs" :key='song.index' @click='chooseSong(songIndex)'>
        <div class="left-songbar-part">
          <div class="song-details">
            <div class="upper-songlistbar">
              {{ song.duration }} <div class='separate-bar'> | </div>Icona Pop
            </div>
              <p>{{ song.title }}</p>
            </div>
              <font-awesome-icon icon='share-alt' :style="{color: 'purple' }" />
              <font-awesome-icon icon='heart' :style="{color: 'red', marginLeft: '10px' }" />
        </div>
          <hr>
      </div>
    </div>
  </div>
  <div v-if="isPlayerVisible">
    <Player
      :song="songs[currentSongIndex]"
      @back='isPlayerVisible = !isPlayerVisible'
      @next='playNext'
      @previous='playPrev'
    />
  </div>
</template>

<script>
import Player from '../components/Player.vue'

export default {
  data () {
    return {
      currentSongIndex: 0,
      isPlayerVisible: true,
      songs: [
        {
          title: 'Still dont know',
          duration: '3:16'
        },
        {
          title: 'Off of my mind',
          duration: '2:44'
        },
        {
          title: 'I love it',
          duration: '2:35'
        },
        {
          title: 'We got that cool',
          duration: '3:33'
        },
        {
          title: 'All night',
          duration: '3:07'
        },
        {
          title: 'Weekend',
          duration: '2:55'
        },
        {
          title: 'Emergency',
          duration: '2:49'
        },
        {
          title: 'Feels like my body',
          duration: '2:39'
        },
        {
          title: 'Right time',
          duration: '2:50'
        },
        {
          title: 'Spa',
          duration: '3:19'
        },
        {
          title: 'Tell me I am pretty',
          duration: '2:39'
        }
      ]
    }
  },
  components: {
    Player
  },
  methods: {
    showPlayer () {
      this.isPlayerVisible = !this.isPlayerVisible
    },
    chooseSong (index) {
      this.currentSongIndex = index
      this.isPlayerVisible = true
    },
    playPrev () {
      this.currentSongIndex -= 1
    },
    playNext () {
      this.currentSongIndex += 1
    }
  }
}
</script>

<style scoped src='../assets/styles/songlist.css'></style>
