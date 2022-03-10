import Post from './Post.js'
import './style/style.css'
import json from './assets/json.json'
import webpackLogo from './assets/webpack-logo.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

const post = new Post('Webpack new title', webpackLogo)
console.log('Post to String: ', post.toString())
console.log('json: ', json)
console.log('xml: ', xml)
console.log('csv: ', csv)