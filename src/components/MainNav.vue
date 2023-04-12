<template>
  <nav class="main-nav">
    <div class="main-menu">
        <h2 class="main-menu__title">
            Beats App
        </h2>
        <div class="main-menu__profile">
          <router-link class="main-menu__profile-img" to="/artist-account">
            <img :src="ARTIST.image" alt="profile-image"> 
          </router-link>
          <h4 class="main-menu__profile-name">{{ ARTIST.name }}</h4>
          <a class="main-menu__profile-tag">{{ ARTIST.link }}</a>
        </div>
        <MainMenuItem v-for="link of links" v-bind:link="link" :key="link.id" />
    </div>
    <a href="#" class="main-nav__exit">Выйти</a>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import MainMenuItem from '@/components/MainMenuItem.vue'

export default {
  name: 'MainNav',
  computed: {
      ...mapGetters([
          'ARTIST'
      ])
  },
  methods: {
      ...mapActions([
          'GET_ARTIST_FROM_API'
      ])
  },
  mounted() {
      this.GET_ARTIST_FROM_API()
  },
  data() {
    return {
      links: [
        {id: 1, title: 'Главная', link: '/'},
        {id: 2, title: 'Биты', link: '/beats-list'},
        {id: 3, title: 'Топ-треки', link: '/top-list'},
        {id: 4, title: 'Субадминистратор', link: '/subadministrators'}
      ]
    }
  },
  components: {
    MainMenuItem
  }
}
</script>

<style scoped lang="scss">
.main-nav {
    background-color: #20253D;
    min-width: 221px;
    width: 221px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__exit {
        font-size: 14px;
        @extend %sf-semibold;
        padding: 16px 10px 16px 40px;
        margin-bottom: 32px;
        cursor: pointer;
        position: relative;

        &::before {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 16px;
            content: '';
            width: 16px;
            height: 16px;
            background-image: url('../assets/images/dot.svg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
    }
}

.main-menu {
  &__item {
    display: block;
    font-size: 14px;
    @extend %sf-semibold;
    padding: 16px 10px 16px 40px;
    cursor: pointer;
    position: relative;

    &.router-link-exact-active {
        background-color: #080D2B;
    }

    &:hover {
        background-color: #080D2B;
    }

    &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 16px;
        content: '';
        width: 16px;
        height: 16px;
        background-image: url('../assets/images/dot.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    &:first-child {
        padding: 0;
        cursor: inherit;

        &.active {
            background-color: inherit;
        }
        
        &:hover {
            background-color: transparent;
        }

        &::before {
            display: none;
        }
    }
  }

  &__title {
      @extend %sf-bold;
      text-align: center;
      margin: 20px 0;
  }

  &__profile {
      width: 188px;
      margin: 0 auto;
      margin-bottom: 24px;
      padding: 20px;
      background-color: #080D2B;
      border-radius: 14px;
      text-align: center;
  }

  &__profile-img {
    display: block;
    width: max-content;
    margin: 0 auto;

    img {
      display: block;
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  &__profile-name {
      font-size: 15px;
      @extend %sf-bold;
      margin-bottom: 8px;
  }

  &__profile-tag {
      font-size: 14px;
      opacity: 0.72;
  }
}
</style>
