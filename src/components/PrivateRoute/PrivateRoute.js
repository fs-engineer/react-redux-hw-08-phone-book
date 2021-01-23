import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...routeProps
}) {}
