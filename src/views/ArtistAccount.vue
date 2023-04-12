<template>
  <div class="page">
      <div class="page__content">
        <div class="artist-account">
            <img class="artist-account__avatar" :src="ARTIST.image" alt="profile-image">
            <div class="artist-account__content">
                <div class="artist-account__info">
                    <h4 class="artist-account__name">
                        {{ ARTIST.name }}
                    </h4>
                    <a href="tel:+77077077070" class="artist-account__phone">{{ ARTIST.phone }}</a>
                    <p class="artist-account__loc">{{ ARTIST.city }}, {{ ARTIST.country }}</p>
                    <ul class="artist-account__social">
                        <li>
                            <a href="#"><img src="../assets/images/instagram.svg" alt="icon"></a>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/images/youtube.svg" alt="icon"></a>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/images/facebook.svg" alt="icon"></a>
                        </li>
                    </ul>
                </div>
                <div class="artist-account__statistics">
                    <div class="artist-account__statistics-edit">
                        <router-link class="artist-account__edit-icon" to="/artist-account-edit"></router-link>
                        <a class="artist-account__edit-icon"></a>
                    </div>
                    <div class="artist-account__statistics-info">
                        <p><span>{{ ARTIST.beatsCount }}</span>бита</p>
                        <p><span>{{ ARTIST.auditions }}</span>прослушиваний</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'ArtistAccount',
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
    }
</script>

<style lang="scss">
.artist-account {
    background-color: #20253D;
    border-radius: 14px;
    display: flex;
    padding: 32px;
    margin-bottom: 20px;

    &__avatar {
        min-width: 140px;
        min-height: 140px;
        width: 140px;
        height: 140px;
        border-radius: 100%;
        object-fit: cover;
        margin-right: 20px;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    &__name {
        font-size: 22px;
        @extend %sf-bold;
        margin-bottom: 12px;
    }

    &__phone {
        display: block;
        font-size: 17px;
        @extend %sf-bold;
        margin-bottom: 16px;
        padding-right: 24px;
        position: relative;

        &::before {
            position: absolute;
            content: '';
            width: 16px;
            height: 16px;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            background-image: url('../assets/images/check.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    &__loc {
        opacity: 0.5;
        @extend %sf-medium;
        margin-bottom: 11px;
    }

    &__social {
        display: flex;

        li a {
            opacity: 0.6;
            margin-right: 12px;

            &:hover {
                opacity: 1;
            }
        }
    }

    &__statistics-edit {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 26px;
    }

    &__edit-icon {
        &:first-child,
        &:last-child {
            width: 16px;
            height: 16px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        &:first-child {
            background-image: url('../assets/images/edit.svg');
            margin-right: 16px;
        }

        &:last-child {
            background-image: url('../assets/images/dot.svg');
        }
    }

    &__statistics-info {
        display: flex;
        justify-content: flex-end;

        p {
            text-align: center;
            font-size: 15px;
            color: rgba(255,255,255, 0.5);
            
            span {
                display: block;
                font-size: 44px;
                line-height: 44px;
                color: #fff;
                @extend %sf-bold;
                margin-bottom: 20px;
            }

            &:first-child {
                margin-right: 32px;
                position: relative;

                &::before {
                    position: absolute;
                    content: '';
                    height: 100%;
                    width: 1px;
                    background-color: rgba(#787880, 0.5);
                    right: -32px;
                    top: 2px;
                }
            }

            &:last-child {
                margin-left: 32px;
            }
        }
    }
}
</style>

