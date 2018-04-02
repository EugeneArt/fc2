import angular from 'angular';
import { NewsListComponent } from './news-list.component';

export const NewsListModule = angular
  .module('news.list', [])
  .component('newsList', NewsListComponent)
  .name;

  