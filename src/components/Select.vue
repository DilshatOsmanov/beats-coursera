<template>
    <div class="v-select">
        <p class="main-select" :class="{active: areOptionsVisible}" @click="areOptionsVisible = !areOptionsVisible">{{ selected }}</p>
        <div class="options" v-if="areOptionsVisible">
            <p v-for="option in options" :key="option.value" @click="selectOption(option)">
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option)
            this.areOptionsVisible = false
        },
        hideSelect() {
            this.areOptionsVisible = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect)
    }
}
</script>

<style lang="scss" scope>
    .v-select {
        position: relative;
    }

    .main-select {
        width: 100%;
        font-size: 17px;
        color: rgba(#fff, 0.5);
        padding-bottom: 12px;
        padding-right: 15px;
        border-bottom: 1px solid rgba(#fff, 0.2);
        cursor: pointer;
        position: relative;

        &::before {
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(calc(-50% - 6px)) rotate(90deg);
            right: 3px;
            width: 8px;
            height: 14px;
            background-image: url('../assets/images/arrow.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        &.active {
            &::before {
                transform: translateY(calc(-50% - 6px)) rotate(270deg);
            }
        }
    }

    .options {
        position: absolute;
        top: calc(100% - 1px);
        left: 0;
        background-color: #080D2B;
        z-index: 2;
        width: 100%;
        border: 1px solid rgba(#fff, 0.2);

        p {
            padding: 10px 0;
            border-bottom: 1px solid rgba(#fff, 0.2);
            font-size: 17px;
            color: rgba(#fff, 0.5);
            cursor: pointer;

            &:last-child {
                border-bottom: none;
            }
        }
    }
</style>