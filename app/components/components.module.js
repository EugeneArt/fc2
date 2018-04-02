import angular from 'angular';
import { NewsModule } from './news/news.module';
import { NewsFormModule } from './news/news-form/news-form.module';
import { NewsListModule } from './news/news-list/news-list.module';

export const ComponentsModule = angular
  .module('app.components', [
    NewsModule,
    NewsFormModule,
    NewsListModule
  ])
  .name;