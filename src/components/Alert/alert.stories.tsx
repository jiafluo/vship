import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './index'
const basicAlert = () => (
  <div style={{padding: '0px 40px'}}>
    <Alert message='basicAlert' type='error'></Alert>
    <Alert message='basicAlert' type='info'></Alert>
    <Alert message='basicAlert' type='success' description='descriptionAlert'></Alert>
    <Alert message='basicAlert' type='warning' description='descriptionAlert'></Alert>
  </div>
)
const showIconAlert = () => (
  <div  style={{padding: '0px 40px'}}>
    <Alert message='showIconAlert' type='error' showIcon></Alert>
    <Alert message='showIconAlert' type='info' showIcon></Alert>
    <Alert message='showIconAlert' type='success' showIcon description='description'></Alert>
    <Alert message='showIconAlert' type='warning' showIcon description='description'></Alert>
  </div>
)
const closeButton = () => (
  <div  style={{padding: '0px 40px'}}>
    <Alert message='closeButton' type='success' showIcon closable></Alert>
    <Alert message='closeButton' type='info' closable closeText='关闭'></Alert>
    <Alert message='closeButton' type='error' showIcon description='description' closable></Alert>
    <Alert message='closeButton' type='warning' description='description' closable closeText='关闭'></Alert>
  </div>
)
const bannerAlert = () => (
  <div  style={{padding: '0px 40px'}}>
    <Alert message='bannerAlert' type='success' showIcon banner></Alert>
    <br/>
    <Alert message='bannerAlert' type='info' closable banner></Alert>
    <br/>
    <Alert message='bannerAlert' type='error' showIcon description='description' banner></Alert>
    <br/>
    <Alert message='bannerAlert' type='warning' description='description' closable banner></Alert>
  </div>
)
storiesOf('Alert', module)
  .add('basic alert', basicAlert)
  .add('show icon alert', showIconAlert)
  .add('close alert', closeButton)
  .add('banner alert', bannerAlert)