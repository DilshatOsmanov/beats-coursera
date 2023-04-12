<template>
  <div class="page">
    <div class="page__content">
        <div class="page__top">
            <label class="page__search-label" for="search">
                <input class="page__search" id="search" type="search" placeholder="Поиск">
            </label>
        </div>
        <table class="page__music-list">
            <thead>
                <tr>
                    <th colspan="5" class="page__music-sort" >
                        <button class="page__music-sort-btn" :class="{ active: activeBlock === 1 }" @click.prevent="activeBlock = 1">
                            Топ-треки
                        </button>
                        <button class="page__music-sort-btn" :class="{ active: activeBlock === 2 }" @click.prevent="activeBlock = 2">
                            Топ-артисты
                        </button>
                        <button class="page__music-sort-btn" :class="{ active: activeBlock === 3 }" @click.prevent="activeBlock = 3">
                            Топ-страны
                        </button>
                    </th>
                </tr>
            </thead>
            <TopTracks v-if="activeBlock === 1" />
            <TopArtists v-if="activeBlock === 2" />
            <TopCountries v-if="activeBlock === 3" />
        </table>
    </div>
  </div>
</template>

<script>
    import  TopTracks from '@/components/TopTracks'
    import  TopArtists from '@/components/TopArtists'
    import  TopCountries from '@/components/TopCountries'

    export default {
        name: 'TopList',
        components: {
            TopTracks,
            TopArtists,
            TopCountries
        },
        data() {
            return {
                activeBlock: 1
            }
        }
    }
</script>

