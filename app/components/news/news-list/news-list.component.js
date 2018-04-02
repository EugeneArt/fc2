import templateUrl from './news-list.html';

export const NewsListComponent = {
  bindings: {
    news: '<'
  },
  templateUrl,
  controller: class NewsListComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
    }
   
  }
};