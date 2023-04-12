<template>
  <div class="page">
    <div class="page__content">
      <div class="page__top">
          <label class="page__search-label" for="search">
              <input class="page__search" id="search" type="search" placeholder="Поиск">
          </label>
      </div>
      <div class="dashboard">
          <div class="dashboard__item">
              <span class="dashboard__item-icon">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.1818 6.47749V14.498C17.4886 14.1489 16.6826 14.0091 15.889 14.1002C15.0953 14.1913 14.3584 14.5083 13.7923 15.002C13.2263 15.4956 12.8629 16.1384 12.7584 16.8306C12.6539 17.5227 12.8142 18.2256 13.2145 18.8302C13.6147 19.4348 14.2326 19.9073 14.9721 20.1745C15.7117 20.4416 16.5317 20.4885 17.3049 20.3078C18.0781 20.1271 18.7613 19.7289 19.2486 19.1751C19.7359 18.6212 20 17.9425 20 17.2444V1.27005C20.0003 1.06651 19.9444 0.865891 19.837 0.685149C19.7297 0.504407 19.5741 0.348844 19.3833 0.231597C19.1925 0.11435 18.9722 0.0388622 18.7409 0.0115078C18.5097 -0.0158465 18.2742 0.00573608 18.0545 0.0744328L6.41819 3.69934C6.13609 3.78755 5.89213 3.9496 5.71964 4.16332C5.54715 4.37705 5.45457 4.63202 5.45455 4.89338V16.0821C4.76137 15.733 3.95551 15.5932 3.16194 15.6843C2.36837 15.7754 1.63142 16.0923 1.06538 16.5858C0.49933 17.0794 0.135815 17.722 0.0311992 18.4141C-0.0734169 19.1062 0.0867116 19.809 0.486754 20.4136C0.886797 21.0183 1.5044 21.4909 2.2438 21.7582C2.98319 22.0256 3.80306 22.0727 4.57628 21.8922C5.34949 21.7118 6.03284 21.3139 6.52037 20.7603C7.00789 20.2066 7.27235 19.5282 7.27273 18.8301V9.87565L18.1818 6.47908V6.47749Z" fill="#714BF6"/>
                  </svg>
              </span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      1 211
                  </h4>
                  <p class="dashboard__item-text">
                      Beats
                  </p>
              </div>
          </div>
          <div class="dashboard__item">
              <span class="dashboard__item-icon">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.49 9.12802L1.49 0.128038C1.18 -0.0459616 0.802 -0.0419616 0.496 0.136038C0.188 0.316038 0 0.644037 0 1.00004V19C0 19.356 0.188 19.684 0.496 19.864C0.652 19.954 0.826 20 1 20C1.168 20 1.338 19.958 1.49 19.872L17.49 10.872C17.804 10.694 18 10.362 18 10C18 9.63802 17.804 9.30602 17.49 9.12802Z" fill="#714BF6"/>
                  </svg>
              </span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      1 211
                  </h4>
                  <p class="dashboard__item-text">
                      Songs
                  </p>
              </div>
          </div>
          <div class="dashboard__item">
              <span class="dashboard__item-icon">
                  <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0V22.5469H4.71875V15.5469H9.17188C13.9219 15.5469 17.2188 12.4375 17.2188 7.79688C17.2188 3.10938 14.0469 0 9.40625 0H0ZM4.71875 3.875H8.15625C10.875 3.875 12.4219 5.25 12.4219 7.8125C12.4219 10.3438 10.8438 11.7188 8.14062 11.7188H4.71875V3.875Z" fill="#714BF6"/>
                  </svg>
              </span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      1 211
                  </h4>
                  <p class="dashboard__item-text">
                      Distribution
                  </p>
              </div>
          </div>
          <div class="dashboard__item">
              <span class="dashboard__item-icon">
                  <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.48438 15.7969C11.9062 16.4062 12.7344 17.0781 12.7344 18.4062C12.7344 19.7969 11.6562 20.75 9.48438 20.9375V15.7969ZM7.6875 11.125C5.59375 10.5625 4.6875 9.78125 4.6875 8.5625C4.6875 7.34375 5.71875 6.35938 7.6875 6.14062V11.125ZM9.48438 11.5312V6.15625C11.2344 6.40625 12.4062 7.35938 12.625 9.01562H16.7969C16.6562 5.29688 13.8281 2.84375 9.48438 2.51562V0H7.6875V2.51562C3.39062 2.78125 0.3125 5.23438 0.3125 8.98438C0.3125 12.3906 2.5625 14.2344 6.64062 15.1562L7.6875 15.3906V20.9375C5.5625 20.7188 4.45312 19.6406 4.1875 18.0938H0C0.125 22 3.29688 24.3125 7.6875 24.5781V27.0312H9.48438V24.5625C13.9219 24.25 17.0938 21.8438 17.0938 17.9062C17.0938 14.4688 14.8594 12.7344 10.5938 11.7812L9.48438 11.5312Z" fill="#714BF6"/>
                  </svg>
              </span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      1 211
                  </h4>
                  <p class="dashboard__item-text">
                      Sales
                  </p>
              </div>
          </div>
          <div class="dashboard__item graph">
              Space for the schedule
          </div>
          <div class="dashboard__item artists">
              <h4 class="artists__title">
                  Артисты
              </h4>
              <div class="artists__graph">
                  <svg width="250px" height="250px" viewBox="0 0 42 42" class="donut">
                      <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent"></circle>
                      <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fff" stroke-width="1"></circle>
                      <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#714BF6" stroke-width="1" stroke-dasharray="25 75" stroke-dashoffset="25"></circle>
                  </svg>
                  <h4 class="artists__graph-count">
                      7 679
                  </h4>
                  <p class="artists__graph-text">
                      Активные
                  </p>
              </div>
              <div class="artists__graph">
                  <svg width="250px" height="250px" viewBox="0 0 42 42" class="donut">
                      <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent"></circle>
                      <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fff" stroke-width="1"></circle>
                      <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#714BF6" stroke-width="1" stroke-dasharray="70 30" stroke-dashoffset="25"></circle>
                  </svg>
                  <h4 class="artists__graph-count">
                      324 256
                  </h4>
                  <p class="artists__graph-text">
                      Общее
                  </p>
              </div>
          </div>
          <div class="dashboard__item dashboard__item-with-graph">
              <span class="dashboard__item-percent">+1.2%</span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      324 млн.
                  </h4>
                  <p class="dashboard__item-text">
                      Прослушиваний
                  </p>
              </div>
              <span class="dashboard__item-graph">
                  <svg width="90" height="29" viewBox="0 0 90 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 16.0772C1 16.0772 4.14286 20.7796 8.07143 19.3689C12 17.9581 9.64286 10.9044 12 9.02345C14.3571 7.14249 16.7143 11.3747 19.4643 10.9044C22.2143 10.4342 22.2143 1.96974 26.1429 1.02922C30.0714 0.0886948 27.3799 22.1379 35.5714 23.1309C39.0521 23.5528 39.8929 20.3094 43.0357 20.7796C46.1786 21.2498 46.9643 29.244 50.5 27.8333C54.0357 26.4226 53.684 12.9415 61.1071 13.2557C65.8701 13.4572 65.4276 20.1986 70.1429 19.3689C74.8849 18.5344 73.9329 10.6545 78.3929 8.55319C82.4003 6.66507 89 9.02345 89 9.02345" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
              </span>
          </div>
          <div class="dashboard__item dashboard__item-with-graph purple">
              <span class="dashboard__item-percent">+0.8%</span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      114 459
                  </h4>
                  <p class="dashboard__item-text">
                      Загрузок
                  </p>
              </div>
              <span class="dashboard__item-graph">
                  <svg width="90" height="29" viewBox="0 0 90 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 16.0772C1 16.0772 4.14286 20.7796 8.07143 19.3689C12 17.9581 9.64286 10.9044 12 9.02345C14.3571 7.14249 16.7143 11.3747 19.4643 10.9044C22.2143 10.4342 22.2143 1.96974 26.1429 1.02922C30.0714 0.0886948 27.3799 22.1379 35.5714 23.1309C39.0521 23.5528 39.8929 20.3094 43.0357 20.7796C46.1786 21.2498 46.9643 29.244 50.5 27.8333C54.0357 26.4226 53.684 12.9415 61.1071 13.2557C65.8701 13.4572 65.4276 20.1986 70.1429 19.3689C74.8849 18.5344 73.9329 10.6545 78.3929 8.55319C82.4003 6.66507 89 9.02345 89 9.02345" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
              </span>
          </div>
          <div class="dashboard__item dashboard__item-with-graph">
              <span class="dashboard__item-percent">-2.6%</span>
              <div class="dashboard__item-info">
                  <h4 class="dashboard__item-number">
                      59 182
                  </h4>
                  <p class="dashboard__item-text">
                      Рейтингов
                  </p>
              </div>
              <span class="dashboard__item-graph">
                  <svg width="90" height="29" viewBox="0 0 90 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 16.0772C1 16.0772 4.14286 20.7796 8.07143 19.3689C12 17.9581 9.64286 10.9044 12 9.02345C14.3571 7.14249 16.7143 11.3747 19.4643 10.9044C22.2143 10.4342 22.2143 1.96974 26.1429 1.02922C30.0714 0.0886948 27.3799 22.1379 35.5714 23.1309C39.0521 23.5528 39.8929 20.3094 43.0357 20.7796C46.1786 21.2498 46.9643 29.244 50.5 27.8333C54.0357 26.4226 53.684 12.9415 61.1071 13.2557C65.8701 13.4572 65.4276 20.1986 70.1429 19.3689C74.8849 18.5344 73.9329 10.6545 78.3929 8.55319C82.4003 6.66507 89 9.02345 89 9.02345" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
              </span>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
