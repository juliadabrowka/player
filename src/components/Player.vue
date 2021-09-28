<template>
    <div class="player">
        <div class="upper-bar">
            <div class="marginset">
                <div class="music-options">
                    <font-awesome-icon icon="retweet" color="white" />
                    <font-awesome-icon icon="random" color="white" />
                    <font-awesome-icon icon="redo" color="white" />
                </div>
                <font-awesome-icon icon="bars" :style="{ color: 'white', opacity: '0.4' }" @click='back' />
            </div>
        </div>
        <div class="middle-bar">
            <div class="artistname">Icona Pop</div>
            <div class="songtitle">{{ song.title }}</div>
        </div>
      </div>
        <div class="song-duration-bar">
            <img src="" alt="" class="speaker-image">
        </div>
        <div class="bottom-bar">
            <div class="play-options">
                <font-awesome-icon icon="share-alt" :style="{ color : 'purple', backgroundColor: 'white', padding: '15px', borderRadius: '50%' }" />
                <font-awesome-icon icon="step-backward" :style="{ color: 'white', backgroundColor: 'purple', marginLeft: '15%', padding: '25px', borderRadius: '50%' }" @click='previous' />
                <font-awesome-icon icon="play" :style="{ color: 'white', backgroundColor: 'purple', margin: '0 3%', padding: '35px', borderRadius: '50%' }" @click="pressedPlay" v-if="button" />
                <font-awesome-icon icon="pause" :style="{ color: 'white', backgroundColor: 'purple', margin: '0 3%', padding: '35px', borderRadius: '50%' }" @click="pressedPlay" v-else />
                <font-awesome-icon icon="step-forward" :style="{ color: 'white', backgroundColor: 'purple', marginRight: '15%', padding: '25px', borderRadius: '50%' }" @click='next' />
                <font-awesome-icon icon="heart" :style="{ color: 'red', padding:'15px', backgroundColor: 'white', borderRadius: '50%' }" />
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      button: true,
      isSonglistVisible: false
    }
  },
  props: {
    song: {
      title: String,
      duration: String
    }
  },
  emits: [
    'back', 'next', 'previous'
  ],
  methods: {
    back () {
      this.$emit('back')
    },
    next () {
      this.$emit('next')
    },
    previous () {
      this.$emit('previous')
    },
    pressedPlay () {
      this.button = !this.button
    }
  }

}
</script>

<style scoped src="../assets/styles/player.css"></style>
