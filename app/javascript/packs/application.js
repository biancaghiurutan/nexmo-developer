/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'babel-polyfill'

import { TweenLite, CSSPlugin } from 'gsap'
import React from 'react'
import ReactDOM from 'react-dom'
import GithubCards from './GithubCards'
import TabbedExamples from './TabbedExamples'
import Format from './Format'
import JsSequenceDiagrams from './JsSequenceDiagrams'
import Navigation from './Navigation'
import Scroll from './Scroll'
import Search from './Search'
import Modals from './Modals'
import Notices from './Notices'
import Feedback from './Feedback'
import Concatenation from './Concatenation'
import APIStatus from './APIStatus'
import BuildingBlockEvents from './BuildingBlockEvents'

import {
  preventSamePage as turbolinksPreventSamePage,
  animate as turbolinksAnimate
} from './Turbolinks'

Navigation()
Scroll()
turbolinksPreventSamePage()
turbolinksAnimate()

let refresh = () => {
  Notices()
  GithubCards()
  JsSequenceDiagrams()
  new TabbedExamples
  new Format
  Modals()
  APIStatus()
  Scroll()
  Navigation()
  BuildingBlockEvents()

  if (document.getElementById('SearchComponent')) {
    ReactDOM.render(<Search/>, document.getElementById('SearchComponent'))
  }

  if (document.getElementById('FeedbackComponent')) {
    ReactDOM.render(<Feedback {...window.feedbackProps}/>, document.getElementById('FeedbackComponent'))
  }

  if (document.getElementById('ConcatenationComponent')) {
    ReactDOM.render(<Concatenation/>, document.getElementById('ConcatenationComponent'))
  }

  // If we're on a two pane page, make sure that the main pane is focused
  let rightPane = document.querySelector(".Vlt-main");
  if (rightPane) { rightPane.click(); }

  Volta.init(['accordion', 'tooltip'])
}

$(document).on('nexmo:load', function() {
  refresh();
})

