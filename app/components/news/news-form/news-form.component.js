import templateUrl from './news-form.html';

export const NewsFormComponent = {
  bindings: {
    article: '<',
    onAddArticle: '&'
  },
  templateUrl,
  controller: class NewsFormComponent {
    constructor() {
      'ngInject';
    }
    $onChanges(changes) {
      if (changes.article) {
        this.article = Object.assign({}, this.article);
      }
    }
    onSubmit() {
      if (!this.article.title) return;
      this.onAddArticle({
        $event: {
          article: this.article
        }
      });
    }
  }
};