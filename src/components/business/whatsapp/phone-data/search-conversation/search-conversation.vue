<template>
  <div class="search-conversation">
    <div class="search-text">
        <div class="icon" v-if="!isFocus">
            <em class="fas fa-search"></em>
        </div>
        <div class="icon" v-if="isFocus">
            <em class="fas fa-arrow-left"></em>
        </div>
        <input class="input" :placeholder="isOpenConversationsUnread ? 'Search...': 'Search...'" @focus="focusInput" @blur="blurInput"/>
    </div>
    <div class="search-option" :class="{'selected': isOpenConversationsUnread}" @click="openConversationsUnread"><em class="fas fa-filter"></em></div>
  </div>
</template>

<script src="./search-conversation.ts" lang="ts"/>
<style src="./search-conversation.scss" lang="scss" scoped/>