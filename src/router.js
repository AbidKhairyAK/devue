import Vue from 'vue';
import VueRouter from 'vue-router';

import NotFound from './components/layouts/NotFound';

import Articles from './components/articles/Articles';
import ArticleList from './components/articles/ArticleList';
import ArticleCreate from './components/articles/ArticleCreate';
import ArticleEdit from './components/articles/ArticleEdit';
import Categories from './components/categories/Categories';
import Users from './components/users/Users';

Vue.use(VueRouter);

const routes = [
	{path: "/", redirect: "/users"},
	{path: "/articles", component: Articles, children: [
		{path: "", redirect: "list"},
		{path: "list", component: ArticleList},
		{path: "create", component: ArticleCreate},
		{path: "edit", component: ArticleEdit},
	]},
	{path: "/categories", component: Categories},
	{path: "/users", component: Users},
	{path: "*", component: NotFound},
];

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

export default router;