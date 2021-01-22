import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.item;

export const getIsLoading = state => state.contacts.isLoading;

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export const getIsAdded = createSelector([getContacts], contacts => {
  const isAdded = name => contacts.map(contact => contact.name).includes(name);
  return isAdded;
});
