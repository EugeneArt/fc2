import angular from 'angular';
import { NewsFormComponent } from './news-form.component';

export const NewsFormModule = angular
  .module('news.form', [])
  .component('newsForm', NewsFormComponent)
  .name;

  