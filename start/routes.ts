/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('index')
})

Route.get('/index', async ({ view }) => {
  return view.render('index')
})

Route.get('/dashboard-crm', async ({ view }) => {
  return view.render('dashboard_crm')
})
Route.get('/dashboard-analytics', async ({ view }) => {
  return view.render('dashboard_analytics')
})
Route.get('/navbar-light', async ({ view }) => {
  return view.render('navbar-light')
})
Route.get('/widget-statistic', async ({ view }) => {
  return view.render('widget-statistic')
})