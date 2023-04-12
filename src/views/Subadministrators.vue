<template>
  <div class="page">
    <div class="page__content">
        <div class="page__top">
            <label class="page__search-label" for="search">
                <input class="page__search" id="search" type="search" placeholder="Поиск">
            </label>
            <button class="page__addbit" @click="showModal = true">
                + Добавить субадминистратора
            </button>
        </div>
        <table class="page__music-list page__artists-list">
            <thead>
                <tr>
                    <th>№</th>
                    <th>ФИО</th>
                    <th>E-mail</th>
                    <th>Номер телефона</th>
                    <th>Биты</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Justin Press</td>
                    <td>justin@gmail.com</td>
                    <td>+7 707 707 7070</td>
                    <td>22</td>
                    <td><a href="#" class="link-to-artist" @click="showSubadministratorModal = true">Посмотреть</a></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Justin Press</td>
                    <td>justin@gmail.com</td>
                    <td>+7 707 707 7070</td>
                    <td>22</td>
                    <td><a href="#" class="link-to-artist" @click="showSubadministratorModal = true">Посмотреть</a></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Justin Press</td>
                    <td>justin@gmail.com</td>
                    <td>+7 707 707 7070</td>
                    <td>22</td>
                    <td><a href="#" class="link-to-artist" @click="showSubadministratorModal = true">Посмотреть</a></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Justin Press</td>
                    <td>justin@gmail.com</td>
                    <td>+7 707 707 7070</td>
                    <td>22</td>
                    <td><a href="#" class="link-to-artist" @click="showSubadministratorModal = true">Посмотреть</a></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Justin Press</td>
                    <td>justin@gmail.com</td>
                    <td>+7 707 707 7070</td>
                    <td>22</td>
                    <td><a href="#" class="link-to-artist" @click="showSubadministratorModal = true">Посмотреть</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    <AddSubadministrator :class="{active: showModal}" @closeModal="closeModal" />
    <ViewSubadministrator :class="{active: showSubadministratorModal}" @closeSubadministratorModal="closeSubadministratorModal" />
  </div>
</template>

<script>
import AddSubadministrator from '@/components/AddSubadministrator'
import ViewSubadministrator from '@/components/ViewSubadministrator'

export default {
    name: 'Subadministrators',
    components: {
        AddSubadministrator,
        ViewSubadministrator
    },
    data() {
        return {
            showModal: false,
            showSubadministratorModal: false
        }
    },
    methods: {
        closeModal() {
            this.showModal = false
        },
        closeSubadministratorModal() {
            this.showSubadministratorModal = false
        }
    }
}
</script>

