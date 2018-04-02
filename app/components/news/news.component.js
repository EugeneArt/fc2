import templateUrl from './news.html';

export const NewsComponent = {
  bindings: {
    newsData: '<'
  },
  templateUrl,
  controller: class NewsComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.newArticle = {
        title: '',
      };
      this.news = [];
    }
    $onChanges(changes) {
      if (changes.newsData) {
        this.news = Object.assign({}, this.newsData);
      }
    }
    addArticle({ article }) {
      if (!article) return;
      this.news.push(article);
      this.newArticle = {
        title: ''
      };
    }
  }
};