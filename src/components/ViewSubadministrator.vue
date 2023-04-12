<template>
    <div class="view-subadministrator">
        <span class="view-subadministrator__close" @click="$emit('closeSubadministratorModal')">
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
        <h3 class="view-subadministrator__title">
            Justin Press
        </h3>
        <div class="view-subadministrator__img"></div>
        <ul class="view-subadministrator__info">
            <li class="view-subadministrator__info-item">
                <p class="view-subadministrator__phone">+7 707 707 7070</p>
                <p class="view-subadministrator__location">Киев, Украина</p>
            </li>
            <li class="view-subadministrator__info-item">
                <div class="view-subadministrator__status">
                    <span>Статус</span>
                    <Select :options="statusOptions" @select="statusSelect" :selected="selectedStatus" />
                </div>
            </li>
            <li class="view-subadministrator__info-item">
                <div class="view-subadministrator__stats">
                    <p><span>22</span>бита</p>
                    <p><span>729,8K</span>прослушиваний</p>
                </div>
            </li>
            <li class="view-subadministrator__info-item">
                <div class="view-subadministrator__social">
                    <a href="#"><img src="../assets/images/instagram.svg" alt="icon"></a>
                    <a href="#"><img src="../assets/images/youtube.svg" alt="icon"></a>
                    <a href="#"><img src="../assets/images/facebook.svg" alt="icon"></a>
                </div>
            </li>
        </ul>
        <button class="view-subadministrator__btn">
            Заблокировать
        </button>
    </div>
</template>

<script>
    import Select from '@/components/Select'

    export default {
        name: 'ViewSubadministrator',
        components: {
            Select
        },
        data() {
            return {
                statusOptions: [
                    {name: 'Активный', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4}
                ],
                selectedStatus: 'Активный',
            }
        },
        methods: {
            statusSelect(option) {
                this.selectedStatus = option.name
            }
        }
    }
</script>

<style lang="scss">
    .view-subadministrator {
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

        &__img {
            width: 336px;
            height: 336px;
            background-color: #20253D;
            border-radius: 14px;
            margin-bottom: 8px;
        }

        &__info-item {
            padding: 24px 0;
            border-bottom: 1px solid rgba(#787880, 0.16);

            &:last-child {
                border-bottom: none;
            }
        }

        &__phone {
            font-size: 22px;
            @extend %sf-bold;
            margin-bottom: 10px;
            padding-right: 33px;
            position: relative;
            width: max-content;

            &::before {
                position: absolute;
                content: '';
                width: 18px;
                height: 18px;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                background-image: url('../assets/images/check.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
        }

        &__location,
        &__status span {
            font-size: 17px;
            @extend %sf-medium;
            opacity: 0.5;
        }

        &__status {
            display: flex;

            span {
                margin-right: 24px;
            }

            & .main-select {
                color: #fff;
                width: 100%;
                border-bottom: none;
                padding-right: 28px;
                padding-bottom: 0;

                &::before {
                    transform: translateY(-50%) rotate(90deg);
                }

                &.active::before {
                    transform: translateY(-50%) rotate(270deg);
                }
            }

            & .options {
                left: -15px;
                top: calc(100% + 10px);
                padding: 0 15px;
                min-width: 200px;
            }
        }

        &__stats {
            display: flex;
            justify-content: flex-start;

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

        &__social {
            display: flex;

            a {
                margin-right: 40px;
                opacity: 0.6;

                &:hover {
                    opacity: 1;
                }

                &:last-child {
                    margin-right: 0;
                }

                img {
                    width: 36px;
                    height: 36px;
                }
            }
        }

        &__btn {
            padding: 14px;
            width: 100%;
            font-size: 17px;
            color: #080D2B;
            @extend %sf-semibold;
            background-color: #fff;
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