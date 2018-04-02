import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { NewsComponent } from './news.component';
import { NewsService } from './news.service';

export const NewsModule = angular
  .module('news', [
    uiRouter
  ])
  .component('news', NewsComponent)
  .service('NewsService', NewsService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('news', {
        url: '/news',
        component: 'news',
        resolve: {
          newsData: NewsService => NewsService.getNews()
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

  