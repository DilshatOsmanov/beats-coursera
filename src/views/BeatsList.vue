<template>
    <div class="page">
        <div class="page__content">
            <div class="page__top">
                <label class="page__search-label" for="search">
                    <input class="page__search" id="search" type="search" placeholder="Поиск">
                </label>
                <button class="page__addbit" @click="showModal = true">
                    + Добавить бит
                </button>
            </div>
            <table class="page__music-list">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Аранжировка</th>
                        <th>Автор</th>
                        <th>Отправить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img class="page__music-icon" src="../assets/images/album-3.jpg">
                        </td>
                        <td>1</td>
                        <td>Ночь берет атмосферой</td>
                        <td>Ras ATD</td>
                        <td><a href="#" class="link-to-song"></a></td>
                    </tr>
                    <tr>
                        <td>
                            <img class="page__music-icon" src="../assets/images/album-3.jpg">
                        </td>
                        <td>1</td>
                        <td>Ночь берет атмосферой</td>
                        <td>Ras ATD</td>
                        <td><a href="#" class="link-to-song"></a></td>
                    </tr>
                    <tr>
                        <td>
                            <img class="page__music-icon" src="../assets/images/album-3.jpg">
                        </td>
                        <td>1</td>
                        <td>Ночь берет атмосферой</td>
                        <td>Ras ATD</td>
                        <td><a href="#" class="link-to-song"></a></td>
                    </tr>
                    <tr>
                        <td>
                            <img class="page__music-icon" src="../assets/images/album-3.jpg">
                        </td>
                        <td>1</td>
                        <td>Ночь берет атмосферой</td>
                        <td>Ras ATD</td>
                        <td><a href="#" class="link-to-song"></a></td>
                    </tr>
                    <tr>
                        <td>
                            <img class="page__music-icon" src="../assets/images/album-3.jpg">
                        </td>
                        <td>1</td>
                        <td>Ночь берет атмосферой</td>
                        <td>Ras ATD</td>
                        <td><a href="#" class="link-to-song"></a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="add-beat-modal" :class="{active: showModal}">
            <span class="add-beat-modal__close" @click="showModal = false">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M10.6491 9.01471L17.6579 2.00566C18.1141 1.54975 18.1141 0.812612 17.6579 0.356703C17.202 -0.0992068 16.4649 -0.0992068 16.009 0.356703L8.99991 7.36575L1.99106 0.356703C1.53493 -0.0992068 0.798004 -0.0992068 0.342093 0.356703C-0.114031 0.812612 -0.114031 1.54975 0.342093 2.00566L7.35095 9.01471L0.342093 16.0238C-0.114031 16.4797 -0.114031 17.2168 0.342093 17.6727C0.569301 17.9001 0.868045 18.0144 1.16658 18.0144C1.46511 18.0144 1.76364 17.9001 1.99106 17.6727L8.99991 10.6637L16.009 17.6727C16.2364 17.9001 16.5349 18.0144 16.8335 18.0144C17.132 18.0144 17.4305 17.9001 17.6579 17.6727C18.1141 17.2168 18.1141 16.4797 17.6579 16.0238L10.6491 9.01471Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <h3 class="add-beat-modal__title">
                Добавить бит
            </h3>
            <form class="add-beat-modal__form">
                <div class="add-beat-modal__img"></div>
                <input class="add-beat-modal__audio" type="file" placeholder="+ Загрузить аудиофайл">
                <input class="add-beat-modal__input-text double" type="text" placeholder="Название">
                <input class="add-beat-modal__input-text" type="text" placeholder="Теги">
                <input class="add-beat-modal__input-text" type="text" placeholder="#Имя артиста">
                <Select :options="genreOptions" @select="genreSelect" :selected="selectedGenre" />
                <Select :options="subgenreOptions" @select="subgenreSelect" :selected="selectedSubgenre" />
                <Select :options="primaryMoodOptions" @select="primaryMoodSelect" :selected="selectedPrimaryMood" />
                <Select :options="secondaryMoodOptions" @select="secondaryMoodSelect" :selected="selectedSecondaryMood" />
                <input class="add-beat-modal__input-text" type="text" placeholder="BPM">
                <Select :options="tonalityOptions" @select="tonalitySelect" :selected="selectedTonality" />
                <button class="add-beat-modal__btn">
                    Опубликовать
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import Select from '@/components/Select'

    export default {
        name: 'BeatsList',
        components: {
            Select
        },
        data() {
            return {
                showModal: false,
                genreOptions: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4}
                ],
                selectedGenre: 'Основной жанр',
                subgenreOptions: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4}
                ],
                selectedSubgenre: 'Поджанр',
                primaryMoodOptions: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4}
                ],
                selectedPrimaryMood: 'Primary mood',
                secondaryMoodOptions: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4}
                ],
                selectedSecondaryMood: 'Secondary mood',
                tonalityOptions: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4}
                ],
                selectedTonality: 'Тональность'
            }
        },
        methods: {
            genreSelect(option) {
                this.selectedGenre = option.name
            },
            subgenreSelect(option) {
                this.selectedSubgenre = option.name
            },
            primaryMoodSelect(option) {
                this.selectedPrimaryMood = option.name
            },
            secondaryMoodSelect(option) {
                this.selectedSecondaryMood = option.name
            },
            tonalitySelect(option) {
                this.selectedTonality = option.name
            }
        }
    }
</script>

<style lang="scss">
    .add-beat-modal {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 400px;
        background-color: #080D2B;
        padding: 50px 32px 35px 32px;
        display: none;

        &.active {
            display: block;
        }

        &__title {
            @extend %sf-bold;
            font-size: 22px;
            margin-bottom: 24px;
        }

        &__form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 24px;
        }

        &__img {
            width: 336px;
            height: 336px;
            background-color: #20253D;
            border-radius: 14px;
            margin-bottom: 8px;
            grid-column: span 2;
        }

        &__audio {
            grid-column: span 2;
        }

        &__input-text {
            display: block;
            border: none;
            border-bottom: 1px solid rgba(#fff, 0.2);
            background-color: transparent;
            color: #fff;
            opacity: 1;
            padding-bottom: 12px;
            font-size: 17px;
            width: 100%;

            &.double {
                grid-column: span 2;
            }

            &::placeholder {
                opacity: 0.5;
            }
        }

        &__btn {
            grid-column: span 2;
            padding: 14px;
            width: 100%;
            font-size: 17px;
            color: #fff;
            @extend %sf-semibold;
            background-color: #714BF6;
            border: none;
            border-radius: 14px;
            cursor: pointer;
            margin-top: 8px;
        }

        &__close {
            position: absolute;
            top: 32px;
            right: 32px;
            width: 18px;
            height: 18px;
            cursor: pointer;
        }
    }
</style>

