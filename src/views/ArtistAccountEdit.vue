<template>
  <div class="page">
      <div class="page__content">
        <div class="artist-account-edit">
            <form class="artist-account-edit__form" @submit="editAccount" action="/" method="post">
                <div class="artist-account-edit__form-content">
                    <img class="artist-account-edit__img" :src="ARTIST.image" alt="profile-image">
                    <div class="artist-account-edit__info">
                        <input class="artist-account-edit__input" type="text" v-model="name" name="name">
                        <input class="artist-account-edit__input" type="text" v-model="phone" name="phone">
                        <input class="artist-account-edit__input" type="text" v-model="city" name="city">
                        <input class="artist-account-edit__input" type="text" v-model="country" name="country">
                        <div class="artist-account-edit__errors-wrapper">
                            <ul class="artist-account-edit__errors" v-if="errors.length">
                                <li v-for="error in errors" :key="error.id">{{ error }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="artist-account-edit__form-btns">
                    <router-link to="/artist-account">Отменить</router-link>
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'ArtistAccount',
        created() {
            this.name = this.ARTIST.name
            this.phone = this.ARTIST.phone
            this.city = this.ARTIST.city
            this.country = this.ARTIST.country
        },
        data() {
            return {
                name: '',
                phone: '',
                city: '',
                country: '',
                errors: []
            }
        },
        computed: {
            ...mapGetters([
                'ARTIST'
            ])
        },
        methods: {
            ...mapActions([
                'EDIT_ARTIST'
            ]),
            editAccount: function(e) {
                if (this.name && this.phone && this.city && this.country) {
                    this.EDIT_ARTIST({name: this.name, phone: this.phone, city: this.city, country: this.country})
                    this.$router.push('artist-account')
                    return true;
                }

                this.errors = [];

                if (!this.name) {
                    this.errors.push('Введите имя.*');
                }
                if (!this.phone) {
                    this.errors.push('Введите номер телефона.*');
                }
                if (!this.city) {
                    this.errors.push('Введите город.*');
                }
                if (!this.country) {
                    this.errors.push('Введите страну.*');
                }
                e.preventDefault()
            }
        },
    }
</script>

<style lang="scss" scoped>
.artist-account-edit {
    background-color: #20253D;
    border-radius: 14px;
    display: flex;
    padding: 32px;

    &__form {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    &__form-content {
        display: flex;
        width: 240px;
    }
    &__info {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr;
    }

    &__errors-wrapper {
        grid-column: span 2;
    }

    &__errors {
        font-size: 14px;
        color: red;
    }

    &__input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-bottom: 8px;
        margin-bottom: 24px;
        font-size: 17px;
        color: rgba(255, 255, 255, 0.7);
        grid-column: span 2;

        &:nth-child(3),
        &:nth-child(4){
            grid-column: span 1;
        }
    }

    &__form-btns {
        a, button {
            font-size: 15px;
            @extend %sf-semibold;
            padding: 8px 13px;
            border-radius: 10px;
        }

        a {
            color: #080D2B;
            background-color: #fff;
        }

        button {
            border: none;
            background-color: $purple;
            color: #fff;
            margin-left: 24px;
            cursor: pointer;
        }
    }

    &__img {
        min-width: 140px;
        min-height: 140px;
        width: 140px;
        height: 140px;
        border-radius: 100%;
        object-fit: cover;
        margin-right: 20px;
    }
}
</style>

